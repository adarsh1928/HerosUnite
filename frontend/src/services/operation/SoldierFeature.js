import { toast } from "react-hot-toast";

import { endpoints } from "../APIs";
import { apiConnector } from "../ApiConnector";


// const {COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API} = studentEndpoints;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }
        script.onerror= () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
}


export async function buyCourse(token, soldierId, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try{
        //load the script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if(!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

        //initiate the order
        console.log(userDetails)
        const amount=1000;
        const userId='64beb0be29b51d6b47cc39b5'
        
        const orderResponse = await apiConnector("POST", endpoints.CAPTURE_PAYMENT, 
                                {soldierId,amount,userId},
                                {
                                    Authorization: `Bearer ${token}`,
                                })

        if(!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("PRINTING orderResponse", orderResponse.data);
        // console.log("PRINTING orderResponse", orderResponse.data.data.currency);
        //options
        const options = {
            key: 'rzp_test_7rMQwu2pXnRj51',
            currency: orderResponse.data.paymentResponse.currency,
            amount: `${orderResponse.data.paymentResponse.amount}`,
            order_id:orderResponse.data.paymentResponse.id,
            name:"HerosUnite",
            description: "Thank You for Donating ",
            prefill: {
                name:`${userDetails.firstName}`,
                email:userDetails.email
            },
        
            handler: function(response) {
                 console.log("ress from forntend",response)
                verifyPayment({...response, soldierId,amount}, token, navigate, dispatch);
            }
        }
        //miss hogya tha 
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function(response) {
            toast.error("oops, payment failed");
            console.log(response.error);
        })

    }
    catch(error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Could not make Payment");
    }
    toast.dismiss(toastId);
}

//verify payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    console.log("bodyData",bodyData) 
    // razorpay_payment_id: "pay_MIUJR257n1m8S7"
    //   soldierId: "64c0f21ae09de26199c75392"
    try{
        const response  = await apiConnector("POST", endpoints.VERIFY_SIGNATURE, bodyData, {
            Authorization:`Bearer ${token}`,
        })

        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("payment Successful, Thanks you for donate");
        navigate("/");
       
    }   
    catch(error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        toast.error("Could not verify Payment");
    }
    toast.dismiss(toastId);
   
}