import React from "react";
import DropDownService from "../Components/Reusable/DropDownService/DropDownService";
import DropDownList from "../Components/Reusable/DropDownList/DropDownList";
import HelpfulLinks from "../Components/Reusable/HelpfulLinks/HelpfulLinks";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
const HealthWellness = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="fs-5 mb-3">Health & Wellness</p>
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Pharmacay"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Vision Center"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Walmart Health"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Insurance Services"
            />
          </div>
          <div className="col-lg-9">
            <p className="fs-5 ms-5">Vision Center</p>
            <div className="d-flex mt-3">
              <div className="ms-5">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-b62b/k2-_a214f5f2-2aaa-45a5-ba00-8bb4cdd0361b.v1.jpg"
                  h="Shop online or in-store"
                  p="Browse our selection of eyewear."
                />
              </div>
              <div className="ms-5">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-3da6/k2-_3391483c-8ff7-445e-99bb-91952d3f1b9f.v1.jpg"
                  h="Contact lenses"
                  p="Order today for speedy delivery."
                />
              </div>
            </div>
            <div className="">
              <p className="fs-5 ms-5 mt-3">Vision Center eyewear</p>
              <div className="d-flex row mt-3 ms-4  ">
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-71f8/k2-_82884711-6f12-48ec-800c-14a6ddc1d913.v1.jpg?"
                  name="Top sellers"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-794f/k2-_30230802-2288-42ad-b1fa-0b8378b97873.v1.jpg?"
                  name="Eyeglass frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ca07/k2-_ed3a0879-d62e-4ce7-8390-d8340da94f38.v1.jpg?"
                  name="Sunglass frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-98ab/k2-_97901826-6540-4478-a762-739ffa3160ec.v1.jpg?"
                  name="Contacts"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-733f/k2-_3fbe220f-80ab-4b8b-80cd-6c3267b6a538.v1.jpg?"
                  name="Eyewear accessories"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-bd18/k2-_20ae89d5-9c7b-43d2-9a6b-416299ea5adb.v1.jpg?"
                  name="All eyewear"
                />
              </div>
              <hr className="ms-5" />
            </div>
            <div className="mt-4">
              <h5 className="font-weight-bold mb-3">Find your frames</h5>
              <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center  justify-content-around ">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-6811/k2-_4e428ad0-4c93-4cbd-a0f0-a4df781ec505.v1.jpg"
                  h="Under $35"
                  p="Stylish picks for lots less."
                />
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-5ba6/k2-_178f12b4-7027-4d42-a4cf-3f93a78e8856.v1.jpg"
                  h="Under $60"
                  p="See what we've got our eye on."
                />
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ce3b/k2-_8e08134e-7b50-4549-b38d-c4f1279dbdd0.v1.jpg"
                  h="Designer finds"
                  p="Names you know & you'll love."
                />
              </div>
            </div>
            <hr />
            <div className="">
              <p className="fs-5 ms-5 mt-3">Vision Center eyewear</p>
              <div className="d-flex row mt-3 ms-4  ">
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-73f9/k2-_8ad5c1dc-af41-4b77-8040-1b564642158c.v1.jpg"
                  name="Glasses frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ba9d/k2-_ef35c9d3-df1c-4ef5-b9db-3c38e9e4c6cc.v1.jpg"
                  name="Sunglasses"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-500d/k2-_ee568d85-6ae3-4735-ae88-86e377361538.v1.jpg"
                  name="Eyewear accessories"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-2752/k2-_caa41357-193b-4226-a7e1-7cfaf243ee3a.v1.jpg"
                  name="Computer & reading glasses"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-cce6/k2-_a3331e84-8388-4d87-9d0b-c30c20a0df52.v1.jpg"
                  name="Eye care"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-6877/k2-_8beb7094-aa1e-4859-b31c-082edba3274a.v1.jpg"
                  name="FSA/HSA Shop"
                />
              </div>
              <hr className="ms-5" />
            </div>
            {/* <div>
            <HelpfulLinks/>
          </div> */}
            <div className="ms-5">
              <p className="fs-5">FAQ</p>
              <hr />
              <DropDownList
                h="Can I try glasses on virtually?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How do I order prescription eyewear online?"
                p="You can browse for prescription glasses online at 
                Walmart & try your favorite pairs on virtually to see how 
                they look on you. Next, you’ll customize your lenses to your 
                needs & upload your prescription. Then you’ll measure your 
                pupillary distance with our digital tool for a good fit.
                 From there, just add your glasses to cart & check out."
              />
              <hr />
              <DropDownList
                h="Where can I find my frame’s size?"
                p="You can browse for prescription glasses online at 
                Walmart & try your favorite pairs on virtually to see how 
                they look on you. Next, you’ll customize your lenses to your 
                needs & upload your prescription. Then you’ll measure your 
                pupillary distance with our digital tool for a good fit.
                 From there, just add your glasses to cart & check out."
              />
              <hr />
              <DropDownList
                h="Can I order contact lenses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Do I need a prescription from my doctor to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What if I don’t have a copy of my prescription?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I add a new prescription if I used the wrong one?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="I don’t know my pupillary distance. How can I get it?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What payment methods can I use?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I use my insurance to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I use my FSA/HSA to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Are there any special discounts or promotions?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How can I track my order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How long will it take to receive my order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What do I do if there’s a problem with my glasses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What if I want to return my glasses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What do I do if my order was canceled due to an issue?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How do I get my glasses to fit correctly?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthWellness;
