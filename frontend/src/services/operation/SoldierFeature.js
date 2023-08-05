import { toast } from "react-hot-toast";

import { endpoints } from "../APIs";
import { apiConnector } from "../ApiConnector";



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


export async function DonateForSoldiers(token, soldierId, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try{
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if(!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

        //initiate the order
        console.log("userr", userDetails)
        const amount=1000;
        const userId=userDetails._id
        console.log("USEER ID",userId)
        
        const orderResponse = await apiConnector("POST", endpoints.CAPTURE_PAYMENT, 
                                {soldierId,amount,userId},
                                {
                                    Authorization: `Bearer ${token}`,
                                })

        if(!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("PRINTING orderResponse", orderResponse.data);
      
        const options = {
            key:'rzp_test_7rMQwu2pXnRj51' ,
            currency: orderResponse.data.paymentResponse.currency,
            amount: `${orderResponse.data.paymentResponse.amount}`,
            order_id:orderResponse.data.paymentResponse.id,
            name:"HerosUnite",
            description: "Thank You for Donating ",
            userId:userId,
            prefill: {
                name:`${userDetails.firstName}`,
                email:userDetails.email
            },
        
            handler: function(response) {
                 console.log("ress from forntend",response)
                verifyPayment({...response, soldierId,amount,userId}, token, navigate, dispatch);
            }
        }
      

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
async function verifyPayment(bodyData, token, navigate, dispatch,userId) {
    const toastId = toast.loading("Verifying Payment....");
    console.log("bodyData",bodyData) 
   
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