// import style from './ProdSpecs.module.css'
export default function ProdSpecs() {
  return <>
    <section data-testid="product-description"><div>
      <h2 className="mt-4 mb-4 ">About this item</h2>
    </div>
      <hr aria-hidden="true" />
      <section className="expand-collapse-section" aria-describedby="delivery-instructions">
        <hr aria-hidden="true" />
        <div className="expand-collapse-header d-flex justify-between items-center w-100">
          <h3 className="w-100 ">Product details</h3>
          <div className="">
            <button className="bg-transparent sans-serif  pointer  bw0 bg-white pt-3" type="button" aria-expanded="true" aria-label="Product details">
              <i className="" style={{ fontSize: "1.5rem", verticalAlign: "-0.25em", width: "1.5rem", height: "1.5rem", boxSizing: "content-box" }}></i>
            </button>
          </div>
        </div>
        <div className=" expand-collapse-content" data-testid="ui-collapse-panel" style={{ height: "auto" }}>
          <div className=" pb-4 pt-1"><div className="nb3" data-testid="product-description-content">
            <div className="mb-3">
              <span className="     overflow-visible " style={{ paddingBottom: "0em", marginBottom: "0em" }}>
                <div className="dangerous-html mb3">iPad Wi-Fi 128GB - An immersive 9.7-inch Multi-Touch Retina display. 8MP camera. FaceTime HD camera. Screen Resolution:2048 x 1536. Processor Model:A10 Fusion chip with 64-bit architecture, Embedded M10 coprocessor.</div>
              </span>
            </div>
            <div className="mb3">
              <span className="   overflow-visible " style={{ paddingBottom: "0em", marginBottom: "0em" }}>
                <div className="dangerous-html mb3">
                  <ul>
                    <li>
                      Size and Weight
                      <div>
                        <ul>
                          <li>Height:9.4 in (240 mm)</li>
                          <li>Width: 6.6 in (169.5 mm)</li>
                          <li>Depth: 0.29 in (7.5 mm)</li>
                          <li>Weight: 1.03 bs (469 g)</li>
                        </ul>
                      </div>
                    </li>
                    <li>Buttons and Connectors
                      <div>
                        <ul>
                          <li>Home/Touch ID sensor</li>
                          <li>Built-in stereo speakers</li>
                          <li>Lightning connector</li>
                          <li>3.5 mm headphone jack</li>
                          <li>On/Off - Sleep/Wake</li>
                          <li>Volume up/down</li>
                        </ul>   </div>
                    </li>
                    <li>Display
                      <div>
                        <ul>
                          <li>Retina display</li>
                          <li>9.7-inch (diagonal) LED-backlit Multi-Touch display with IPS technology (2048 x 1536 pixel resolution at 264 ppi)</li>
                          <li>Fingerprint-resistant oleophobic coating</li>
                        </ul>
                      </div>
                    </li>
                    <li>Chip
                      <div>
                        <ul>
                          <li>A9 chip with 64-bit architecture</li>
                          <li>Embedded M9 coprocessor</li>
                        </ul>
                      </div>
                    </li>
                    <li>Camera
                      <div>
                        <ul>
                          <li>8MP camera, Live Photos, Autofocus, Panorama (up to 43MP), HDR for photos, Exposure control, Burst mode, Tap to focus, Timer mode, f/2.4 aperture, Five-element lens, Hybrid IR filter, Backside illumination, Auto image stabilization, Face detection, Photo geotagging</li>
                        </ul>
                      </div>
                    </li>
                    <li>Video Recording
                      <div>
                        <ul>
                          <li>1080p HD video recording (30 fps), Slo-mo (120 fps), Time-lapse video with stabilization, Video image stabilization, Face detection, 3x video zoom, Video geotagging</li>
                        </ul>
                      </div>
                    </li>
                    <li>FaceTime HD Camera
                      <div>
                        <ul>
                          <li>1.2MP photos, Live Photos, f/2.2 aperture, Retina Flash, 720p HD video recording, Backside illumination, HDR for photos and videos, Face detection, Burst mode, Exposure control, Timer mode</li>
                        </ul>
                      </div>
                    </li>
                    <li>Wireless
                      <div>
                        <ul>
                          <li>Wi-Fi (802.11a/b/g/n/ac); dual band (2.4GHz and 5GHz); HT80 with MIMO</li>
                          <li>Bluetooth 4.2 technology</li>
                        </ul>
                      </div>
                    </li>
                    <li>Sensors
                      <div>
                        <ul>
                          <li>Touch ID</li>
                          <li>Three-axis gyro</li>
                          <li>Accelerometer</li>
                          <li>Barometer</li>
                          <li>Ambient light sensor</li>
                        </ul>
                      </div>
                    </li>
                    <li>Power and Battery
                      <div>
                        <ul>
                          <li>Built-in 32.4-watt-hour rechargeable lithium-polymer battery</li>
                          <li>Up to 10 hours of surfing the web on Wi-Fi, watching video, or listening to music</li>
                          <li>Charging via power adapter or USB to computer system</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className=" bg-transparent   sans-serif mb-3 ">
              <span className="">
                <span className="">info:</span>
                <svg fill="currentColor" height="1em" viewBox="0 0 16 16" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" style={{ fontSize: " 1rem", verticalAlign: "-0.175em" }}>
                  <path fill-rule="evenodd" >
                  </path>
                </svg>
              </span>
              <div className="">
                <div>
                  <span className="">We aim to show you accurate product information.
                  </span>Manufacturers, suppliers and others provide what you see here, and we have not verified it.&nbsp;&nbsp;
                  <button type="button" className=" pointer b--none bg-transparent sans-serif dark-gray ph0" aria-label="See our disclaimer">See our disclaimer
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </section>

    <section className="expand-collapse-section " aria-describedby="delivery-instructions">
      <hr aria-hidden="true" className="" />
      <div className="expand-collapse-header flex justify-between items-center w-100" >
        <h2 className="w-100 ">Specifications</h2>
        <div className="">
          <button className="bg-transparent   sans-serif  pointer  bg-white pt-3" type="button" aria-expanded="true" aria-label="Specifications">
            <i className="" style={{ fontSize: "1.5rem", verticalAlign: "-0.25em", width: "1.5rem", height: "1.5rem", boxSizing: "content-box" }}></i>
          </button>
        </div>
      </div>
      <div className=" expand-collapse-content" data-testid="ui-collapse-panel" style={{ height: "auto" }}>
        <div className=" pb-4 pt-1">
          <div className="">
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Processor Brand</h3>
              <div className="">
                <span>Apple</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Processor Type</h3>
              <div className="">
                <span>Apple A9</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Front-Facing Camera Megapixels</h3>
              <div className="">
                <span>1.2 MP</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Processor Speed</h3>
              <div className="">
                <span>1.84 GHz</span>
              </div></div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Virtual Assistant</h3>
              <div className="">
                <span>Siri</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Battery Life</h3>
              <div className="">
                <span>10 h</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Screen Size</h3>
              <div className="">
                <span>9.7"</span>
              </div></div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center pb-1 ">Data Storage</h3>
              <div className="">
                <span>128 GB</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Native Resolution</h3>
              <div className="">
                <span>2048 x 1536</span>
              </div>
            </div>
            <div className="pb--2">
              <h3 className="d-flex align-items-center  pb-1 ">Wireless Technology</h3>
              <div className="">
                <span>802.11n, Bluetooth, Wi-Fi, 802.11b, 802.11a, 802.11ac, 802.11g</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">RAM Memory</h3>
              <div className=""><span>2 undefined</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Accessories Included</h3>
              <div className="">
                <span>
                  <ul><li>Apple 9.7-inch iPad Wi-Fi</li>
                    <li>Power adapter</li><li>Lightning to USB cable</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Rear-Facing Camera Megapixels</h3>
              <div className="">
                <span>8 MP</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Features</h3>
              <div className=""><span>Touch ID, Three-axis gyro, Accelerometer, Barometer, Ambient light sensor</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Brand</h3>
              <div className="">
                <span>Apple</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Manufacturer Part Number</h3>
              <div className="">
                <span>iPad Air 128GB</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="a-flex align-items-center  pb-1 ">Operating System</h3>
              <div className="">
                <span>Apple iOS</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Color</h3>
              <div className="">
                <span>Silver</span>
              </div>
            </div>
            <div className="pb2">
              <h3 className="d-flex align-items-center  pb-1 ">Assembled Product Weight</h3>
              <div className="">
                <span>1.05 lb</span>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="d-flex align-items-center  pb-1 ">Manufacturer</h3>
              <div className="">
                <span>Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="expand-collapse-section " aria-describedby="delivery-instructions">
      <hr aria-hidden="true" className="" />
      <div className="expand-collapse-header d-flex justify-content-between align-items-center w-100">
        <h2 className="w-100">Warranty</h2>
        <div className="">
          <button className="bg-transparent sans-serif  pointer  bg-white pt-3" type="button" aria-expanded="true" aria-label="Warranty">
            <i className="" style={{fontSize: "1.5rem", verticalAlign: "-0.25em", width: "1.5rem", height: "1.5rem", boxSizing: "content-box"}}></i>
          </button>
        </div>
      </div>
      <div className=" expand-collapse-content" data-testid="ui-collapse-panel" style={{height: "auto"}}>
        <div className=" pb-4 pt-1">
          <div className="">
            <div className="pb-2">
              <h3 className="d-flex align-items-center    pb-1 ">Warranty length</h3>
              <div className="">
                <span>1-year warranty</span>
              </div>
            </div>
            <div className="">
              <h3 className="d-flex align-items-center    pb-1 ">Warranty information</h3>
              <div className="">
                <span>Please be aware that the warranty terms on items offered for sale by third party Marketplace sellers may differ from those displayed in this section (if any). To confirm warranty terms on an item offered for sale by a third party Marketplace seller, please use the 'Contact seller' feature on the third party Marketplace seller's information page and request the item's warranty terms prior to purchase.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
