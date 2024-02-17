import React from "react";
import AiAssistantData from "./Data/AiAssistantData";
const AiAssistant = () => {
  return (
    <div className="bg-[#8BE0E9] pb-4">
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        AI Assistant
      </div>
      <div
        className="flex w-full h-[40rem] bg-[#031529] items-center justify-start px-20  bg-[url('https://media.istockphoto.com/id/1318030894/vector/voice-automated-robot-assistant.jpg?s=612x612&w=0&k=20&c=sCWMGQz5JYdE2cQNjNEjbvlzdJD5OrSIRZ34y7ZJMFE=')] bg-no-repeat bg-contain bg-size  "
        style={{ backgroundSize: "100% 100%" }}
      >
        <p
          className="w-[40%] text-[#FFFFFF] text-[1.5rem] "
          style={{ "font-weight": "700" }}
        >
          With our AI Assistant, cooking becomes a personalized adventure.
          Choose, customize, and enjoy a delicious meal crafted to your taste.
          <br />
          Happy cooking!
        </p>
        {/* <img
          className="fit-contain w-full h-[400px]"
          src="https://media.istockphoto.com/id/1318030894/vector/voice-automated-robot-assistant.jpg?s=612x612&w=0&k=20&c=sCWMGQz5JYdE2cQNjNEjbvlzdJD5OrSIRZ34y7ZJMFE="
          alt=""
        /> */}
      </div>
      <div className="flex mb-3 uppercase px-20 pt-12 font-bold text-[2rem] justify-start items-center">
        <h1>Description:</h1>
      </div>
      <div className="px-20   text-[1.2rem] mb-12  flex ">
        Let's say you have some chicken, tomatoes, and pasta in your kitchen.
        Enterthese ingredients, and our platform might suggest a mouthwatering
        ChickenTomato Pasta recipe. our platform will guide you through the
        process, helpingyou create a restaurant-quality dish right at home.
      </div>
      <div className="mt-6 bg-[#8BE0E9]">
        {AiAssistantData.map((obj, index) => {
          if (index % 2) {
            return (
              <div className="flex justify-around items-center w-[90%] gap-12 mx-auto my-12">
                <img
                  src={obj.imageUrl}
                  className="w-[50%] rounded-2xl"
                  alt=""
                />
             
                <div className="flex h-[400px] flex-col justify-start gap-12 pt-6 items-center max-[400px]">
                  <h3 className="text-[2rem] font-bold">{obj.heading}</h3>
                  <p className="text-[1.2rem] ">{obj.description}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex justify-around  flex-row-reverse items-center w-[90%]  mx-auto gap-12">
                <img
                  src={obj.imageUrl}
                  className="w-[50%] rounded-2xl"
                  alt=""
                />
                <div className="flex h-[400px]  flex-col justify-start gap-12 pt-6 items-center">
                  <h3 className="text-[2rem] font-bold">{obj.heading}</h3>
                  <p className="text-[1.2rem] ">{obj.description}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AiAssistant;
