import React, { useEffect } from "react";
import { useState } from "react";
import CustomAutoComplete from "./common/CustomAutocomplete";
import AlertService from "../pages/api/services/AlertService";

function DemoForm({ closeModal, successModal }) {
  const buisnessType = [
    { value: "pharmacy", label: "Pharmacy" },
    { value: "restaurant", label: "Restaurant" },
    { value: "grocery", label: "Grocery" },
    { value: "other", label: "Other" },
  ];

  const [user, setUser] = useState({
    domain: "www.dokanepos.com",
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const serviceData = { ...user, toEmail: "contact@dokanepos.com" };

    if (user?.name && user?.email && user?.phone && user?.type) {
      fetch("https://ms-contact.myrft.xyz/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      })
        .then((result) => {
          result.json();
        })
        .then((data) => {
          console.log(data);
          closeModal();
          successModal(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      AlertService.warn("Please fill the required fields");
    }
  }

  const handleBlur = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };
  const handleBussinessType = (option) => {
    let domainName = user?.domain;
    let formatedMessage = JSON.stringify({
      domainName,
      type: option?.value,
    });
    setUser((preventDefault) => ({
      ...preventDefault,
      type: option.value,
      message: formatedMessage,
    }));
  };
  return (
    <>
      <div className=" block p-6 min-w-sm lg:min-w-[500px] m-auto text-left">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label font-poppins inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              autoComplete="nope"
              className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label font-poppins inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              onBlur={handleBlur}
              autoComplete="nope"
              className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label font-poppins inline-block mb-2 text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              onBlur={handleBlur}
              autoComplete="nope"
              className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter phone"
            />
          </div>

          <div className="form-group mb-6">
            <label
              for="exampleInputEmail1"
              className="form-label font-poppins inline-block mb-2 text-gray-700"
            >
              Busisness Type
            </label>
            <CustomAutoComplete
              options={buisnessType}
              optionLabel={(option) => option.label}
              onChange={(option) => {
                handleBussinessType(option);
              }}
            />
          </div>

          <button
            type="submit"
            className="font-poppins
            px-6
            py-2.5
            bg-[#155263]
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
      <AlertService.RaiseToast />
    </>
  );
}

export default DemoForm;
