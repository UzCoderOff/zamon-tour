import React from "react";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { translations } = useLanguage();
  const nav = useNavigate();

  return (
    <div className="h-[70px] w-full bg-[#22B3C1] flex flex-row align-middle justify-evenly items-center fixed top-0 z-50 ">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="159"
          height="42"
          viewBox="0 0 159 42"
          fill="none"
          className="cursor-pointer"
        >
          <g clip-path="url(#clip0_2_489)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.2405 37.5523C24.9738 38.1765 24.7996 39.0236 25.1944 39.5534C26.0635 40.7204 31.5324 37.7264 32.297 36.6964C29.234 38.1084 29.1003 36.8471 30.153 35.508C30.1975 35.4512 30.2447 35.3951 30.2943 35.339C29.9189 35.5241 29.5365 35.7095 29.1443 35.8985C27.7883 36.4841 26.5053 37.0449 25.2405 37.5523Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8737 22.4406C14.0966 20.54 16.579 17.605 18.8622 15.4887C16.2982 16.6289 14.0956 17.1181 11.6458 17.6424C10.575 17.8717 9.45795 18.1289 8.33774 18.2542C7.73576 19.0101 7.24007 19.7007 6.69181 20.4813C6.0336 21.4188 5.51208 22.3496 4.92957 23.3081C5.21127 23.3395 5.49398 23.3586 5.77499 23.3687C7.37014 23.4257 8.92688 23.2864 10.4459 22.992C11.2598 22.8269 12.0691 22.6427 12.8737 22.4406Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.007 31.3993C24.003 29.7573 26.3306 27.0365 28.5781 24.9633C28.2088 25.1383 27.8577 25.3039 27.5307 25.4591C24.3125 27.0141 20.5421 28.4449 16.8661 29.5003C15.7801 30.9553 15.0779 32.2662 14.4951 33.8355C16.3868 33.5085 18.3183 32.9802 20.05 32.4191C21.0676 32.087 22.0408 31.7558 23.007 31.3993Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7503 39.4497C14.617 40.2262 15.4801 40.7204 16.643 40.9648C18.533 41.3622 20.5516 41.3644 22.3305 41.113C20.9929 41.242 19.4487 40.1117 19.6665 38.8388C19.4421 38.8896 19.216 38.9375 18.9878 38.9829C17.3326 39.3109 15.4984 39.503 13.7503 39.4497Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.37374 34.4713C6.96769 33.7031 7.39409 31.4032 8.04321 30.5525C7.73417 30.5628 7.42531 30.5652 7.11828 30.5587C5.78086 30.5306 4.22904 30.3269 2.83397 29.6598C2.75713 30.2266 2.92948 31.373 3.1735 31.951C3.48275 32.3371 3.91539 32.9181 5.06866 33.588C5.78433 34.0033 6.56371 34.2862 7.37374 34.4713Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.879 3.34863C25.1684 3.43581 22.4174 5.24452 21.565 5.86173C20.243 6.81863 18.5139 8.0909 17.2864 9.25116C19.7793 7.95582 24.9299 4.79951 25.879 3.34863Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.3813 11.5163C34.9478 11.7888 33.0221 13.2396 32.2847 13.7661C31.4574 14.3569 29.132 16.0817 28.42 16.8077C31.2019 15.1459 35.3219 12.4398 36.3813 11.5163Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.3597 23.0612L39.35 22.8483C38.4915 23.4034 37.9355 23.8085 37.0808 24.4454C36.7329 24.7048 36.2084 25.0672 35.7167 25.4364C37.0335 24.6335 38.2912 23.822 39.3597 23.0612Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.83383 29.6597C5.7757 31.0663 9.7304 30.5743 12.8596 29.8938C17.6057 28.8622 22.9214 26.9981 27.2419 24.9106C30.619 23.3079 36.5411 20.6008 38.9431 17.7839C38.4997 15.4411 37.6447 13.4992 36.3812 11.5163C35.0263 12.6971 28.6674 16.793 26.5007 17.8929C21.4204 20.4714 16.0405 22.5064 10.4459 23.641C8.92684 23.9354 7.3701 24.0747 5.77494 24.0177C4.59635 23.9754 3.38726 23.7751 2.35203 23.1736C1.17955 22.4921 0.786806 21.3799 0.821729 18.9739C0.0140715 21.5195 0.197711 28.0058 2.83383 29.6597Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.988 38.9829C22.4614 38.2948 25.4767 36.9487 28.9796 35.4355C31.1124 34.4083 32.959 33.4804 34.9425 32.1798C35.5909 31.7544 37.0767 30.767 37.5611 30.0665C38.4145 28.3967 39.3641 24.8356 39.36 23.0612C35.0289 26.1453 27.5871 30.0609 25.7082 30.8743C23.7944 31.7028 21.9868 32.3441 20.012 32.9887C17.7071 33.7356 15.0481 34.424 12.6 34.6574C10.1346 34.8924 7.29394 34.8795 5.06868 33.588C3.91538 32.9181 3.48277 32.3371 3.17352 31.9511C3.7312 33.3937 5.83551 35.8117 7.39389 37.0042C8.3554 37.7397 9.4518 38.5619 10.623 38.9564C11.2938 39.1826 11.8689 39.2967 12.433 39.3592C14.5506 39.5926 16.9104 39.3948 18.988 38.9829Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3404 17.0315C13.8092 16.5032 16.0269 16.0105 18.6165 14.8513C21.3546 13.5769 28.9009 9.89275 31.4424 6.19868C29.5079 4.74299 27.7118 4.03067 25.8792 3.34863C24.8212 4.96578 18.5431 8.70199 16.544 9.61824C14.0662 10.7542 11.4502 11.6653 9.18426 11.9224C3.95323 12.5883 5.88884 7.7857 9.64128 6.15598C7.78471 6.56926 5.28863 7.99704 3.76273 10.0627C1.76746 12.7637 1.26295 16.2873 4.31879 17.3432C6.59397 18.1294 9.07103 17.5174 11.3404 17.0315Z"
              fill="#18354A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.08375 4.17511C8.85601 4.08659 8.69312 3.96116 8.61629 3.78574L8.55634 3.64974L8.70173 3.5506C8.97766 3.36093 9.23725 3.33109 9.61574 3.28734L16.3719 2.5009C16.6542 2.46761 16.9602 2.42076 17.2498 2.35144C17.5266 2.2852 17.7839 2.19894 17.9808 2.08538L20.1346 0.842501C20.4503 0.660153 20.8031 0.550016 21.1812 0.513572C21.5501 0.477889 21.9422 0.51243 22.3462 0.618844L22.4971 0.658736L22.4781 0.802716C22.4543 0.98316 22.3808 1.20731 22.243 1.42138C22.13 1.59719 21.9732 1.76723 21.7649 1.90258L19.2535 3.53803C18.7573 3.86124 18.6938 4.03521 18.5784 4.35167C18.5466 4.439 18.5117 4.53516 18.4735 4.62785C18.3781 4.85985 18.271 5.11468 18.1661 5.36399C17.8181 6.19083 17.4893 6.97248 17.1942 7.90674L17.1288 8.11427L16.9069 8.06712C16.8934 8.06422 16.8676 8.06131 16.8407 8.05797C16.5916 8.0288 16.2412 7.9877 16.1789 7.33L16.0529 6.00561C16.0507 5.98318 16.0496 5.94439 16.0481 5.90386L16.0482 5.90298C16.0457 5.82385 16.0425 5.72936 16.0145 5.66985C15.9917 5.62103 15.9074 5.60882 15.6567 5.72252C15.0774 5.98498 14.6515 6.18001 14.2106 6.38161C13.4448 6.71254 10.9191 7.26532 9.19354 7.22561C9.37848 7.16095 9.55563 7.09529 9.72275 7.02953L8.97734 6.70377L9.37574 6.5187L10.1541 6.1796L9.01134 5.70129C8.85125 5.62166 8.95492 5.51253 9.09198 5.46665L10.4227 4.99136C10.4719 4.97386 10.5288 4.96925 10.5773 4.97452L12.9982 5.17734L14.0574 4.63709C14.0237 4.61772 13.8568 4.53159 13.7949 4.51973C13.4358 4.45098 10.2659 4.36633 9.83333 4.33659C9.54109 4.30392 9.28544 4.25349 9.08375 4.17511Z"
              fill="#18354A"
            />
            <path
              d="M154.273 10.3346C155.176 10.6749 155.976 11.1854 156.674 11.8654C158.072 13.2266 158.771 15.3968 158.771 18.3757V28.5483H154.478V18.5873C154.478 17.7477 154.389 17.0117 154.213 16.3801C154.039 15.7577 153.78 15.2349 153.435 14.8122C153.094 14.3949 152.673 14.0814 152.173 13.8723C151.666 13.6607 151.074 13.5547 150.398 13.5547C149.676 13.5547 149.034 13.6794 148.473 13.9279C147.914 14.1754 147.431 14.547 147.024 15.0423C146.615 15.5414 146.307 16.1377 146.101 16.8299C145.893 17.5286 145.788 18.3262 145.788 19.2224V28.5483H141.53V10.0375H145.257L145.63 12.1196C146.27 11.4138 147.017 10.8706 147.872 10.4898C148.867 10.0471 150.002 9.82586 151.279 9.82586C152.376 9.82586 153.374 9.9955 154.273 10.3346Z"
              fill="#18354A"
            />
            <path
              d="M126.864 28.4672C126.043 28.2719 125.274 27.9777 124.556 27.5854C123.835 27.1922 123.198 26.7179 122.643 26.1629C122.088 25.6079 121.614 24.9703 121.22 24.2505C120.828 23.5324 120.534 22.7593 120.339 21.9322C120.144 21.1067 120.046 20.2268 120.046 19.2929C120.046 18.3701 120.144 17.4987 120.339 16.6792C120.534 15.8586 120.828 15.0889 121.22 14.3706C121.613 13.6522 122.087 13.0132 122.643 12.4546C123.198 11.8958 123.836 11.4171 124.554 11.0188C125.271 10.6212 126.041 10.3227 126.863 10.124C127.685 9.92543 128.557 9.82586 129.478 9.82586C130.399 9.82586 131.271 9.92543 132.092 10.124C132.914 10.3227 133.684 10.6212 134.402 11.0188C135.12 11.4173 135.757 11.8958 136.312 12.4546C136.868 13.0132 137.342 13.6522 137.735 14.3706C138.127 15.0889 138.421 15.8586 138.617 16.6792C138.812 17.4987 138.909 18.3701 138.909 19.2929C138.909 20.2268 138.812 21.1069 138.617 21.9322C138.421 22.7595 138.127 23.5324 137.735 24.2505C137.342 24.9688 136.868 25.6062 136.312 26.162C135.756 26.7189 135.118 27.1932 134.4 27.5854C132.967 28.3682 131.326 28.7599 129.478 28.7599C128.555 28.7599 127.683 28.6623 126.864 28.4672ZM131.555 24.6667C132.167 24.4011 132.706 24.0014 133.172 23.4676C134.111 22.3932 134.581 21.0015 134.581 19.2929C134.581 18.4348 134.463 17.6574 134.227 16.9613C133.992 16.2684 133.641 15.6539 133.172 15.1182C132.706 14.5846 132.167 14.1846 131.555 13.9191C130.94 13.6528 130.248 13.5195 129.478 13.5195C128.708 13.5195 128.017 13.6528 127.406 13.9193C126.796 14.1848 126.261 14.5846 125.801 15.1174C125.338 15.6535 124.991 16.268 124.759 16.9603C124.526 17.6563 124.41 18.4338 124.41 19.2929C124.41 20.1519 124.526 20.9295 124.759 21.6254C124.991 22.3175 125.338 22.9324 125.801 23.4683C126.261 24.0015 126.796 24.4009 127.406 24.6667C128.017 24.933 128.708 25.0664 129.478 25.0664C130.248 25.0664 130.94 24.933 131.555 24.6667Z"
              fill="#18354A"
            />
            <path
              d="M113.552 10.3233C114.388 10.6556 115.128 11.1536 115.773 11.8168C116.421 12.4833 116.907 13.3472 117.229 14.4082C117.547 15.4573 117.707 16.6976 117.707 18.1286V28.5483H113.449V18.1641C113.449 17.3942 113.372 16.7192 113.218 16.1394C113.067 15.5688 112.842 15.0895 112.543 14.7021C111.954 13.9374 111.072 13.5547 109.898 13.5547C109.27 13.5547 108.711 13.6643 108.221 13.8831C107.732 14.1013 107.307 14.429 106.948 14.866C106.218 15.7529 105.853 16.9819 105.853 18.5521V28.5483H101.56V18.1641C101.56 17.3834 101.481 16.7013 101.325 16.1182C101.172 15.5457 100.942 15.0683 100.639 14.687C100.339 14.3108 99.9691 14.0285 99.531 13.8407C99.0867 13.6501 98.5672 13.5547 97.9737 13.5547C97.359 13.5547 96.8096 13.668 96.3264 13.8944C95.8445 14.1203 95.4225 14.461 95.0617 14.9164C94.6978 15.3758 94.424 15.9151 94.2411 16.5336C94.0566 17.1585 93.9642 17.8667 93.9642 18.6578V28.5483H89.7062V10.0375H93.4331L93.8037 12.1074C94.4026 11.4198 95.0898 10.8873 95.8647 10.5101C96.7762 10.0668 97.8078 9.83876 98.9599 9.82684L98.9615 9.82586C99.6121 9.82586 100.227 9.89597 100.804 10.0358C101.384 10.176 101.923 10.3864 102.422 10.6662C102.926 10.9485 103.371 11.305 103.758 11.7348C104.062 12.0718 104.329 12.4546 104.56 12.8831C104.835 12.4819 105.144 12.1172 105.483 11.7895C105.914 11.3739 106.397 11.0169 106.932 10.7192C107.468 10.4207 108.058 10.1968 108.701 10.0481C109.342 9.90001 110.035 9.82586 110.78 9.82586C111.794 9.82586 112.719 9.99185 113.552 10.3233Z"
              fill="#18354A"
            />
            <path
              d="M86.3461 24.7841H87.3108V28.5483H85.076C84.4689 28.5483 83.9422 28.4832 83.4969 28.3534C83.038 28.2195 82.6661 28.0168 82.382 27.7453C82.0981 27.4743 81.8853 27.1425 81.744 26.7502C81.668 26.5396 81.6128 26.3126 81.5784 26.0688C80.9473 26.8831 80.2043 27.5132 79.3496 27.9584C78.3233 28.4926 77.1393 28.7599 75.7977 28.7599C74.7673 28.7599 73.8351 28.639 73.0015 28.3973C72.1629 28.1545 71.4265 27.789 70.7929 27.3016C70.1529 26.8094 69.6723 26.2234 69.3512 25.5444C69.0311 24.8669 68.8709 24.0999 68.8709 23.244C68.8709 22.2831 69.0425 21.43 69.3859 20.6855C69.73 19.938 70.2469 19.3029 70.9357 18.7801C71.6182 18.2623 72.453 17.8744 73.4399 17.6172C74.4182 17.362 75.5454 17.2345 76.8208 17.2345H81.1479V16.3649C81.1479 15.8896 81.0665 15.4683 80.9038 15.1018C80.7414 14.7373 80.4976 14.4219 80.1727 14.1567C79.8431 13.8877 79.4483 13.6851 78.9894 13.5495C78.5233 13.4119 77.9884 13.3431 77.3853 13.3431C76.8508 13.3431 76.3654 13.4009 75.9295 13.516C75.4981 13.63 75.113 13.8008 74.7752 14.0277C74.4415 14.2522 74.175 14.513 73.9767 14.8089C73.7802 15.1024 73.649 15.4342 73.584 15.8036L73.5512 15.989H69.3765L69.402 15.7423C69.4992 14.8055 69.7556 13.9723 70.1706 13.2428C70.5863 12.512 71.1612 11.8867 71.8945 11.3672C72.6227 10.8515 73.4607 10.465 74.4081 10.2085C75.3505 9.95353 76.402 9.82586 77.5616 9.82586C78.7942 9.82586 79.8886 9.97049 80.8448 10.2589C81.8096 10.5501 82.6337 10.9886 83.3165 11.5734C84.0028 12.1617 84.5175 12.8786 84.8603 13.723C85.2003 14.5617 85.3706 15.5247 85.3706 16.6117V23.7381C85.3706 24.1024 85.45 24.3692 85.6093 24.5374C85.7645 24.7017 86.0105 24.7841 86.3461 24.7841ZM81.1485 20.9156L81.1479 20.5047H76.6445C76.0743 20.5047 75.5719 20.5598 75.1376 20.6697C74.7121 20.7774 74.352 20.9376 74.0584 21.1496C73.7723 21.3563 73.5578 21.6114 73.4156 21.9141C73.2715 22.2211 73.1992 22.5823 73.1992 22.9971C73.1992 23.3522 73.2667 23.6699 73.4011 23.9498C73.5367 24.2305 73.7404 24.4778 74.0123 24.6911C74.2902 24.9081 74.6188 25.0716 74.9991 25.1808C75.3852 25.2929 75.828 25.3486 76.3269 25.3486C77.0898 25.3486 77.767 25.2467 78.3577 25.0433C78.9415 24.8423 79.442 24.5415 79.8589 24.1414C80.2768 23.7404 80.5931 23.2721 80.8073 22.7375C81.023 22.1991 81.1372 21.5919 81.1485 20.9156Z"
              fill="#18354A"
            />
            <path
              d="M51.2037 13.6129V10.0375H66.4333V13.058L56.5993 24.7489H66.8922V28.5482H50.7805V25.5276L60.6145 13.8368H51.2037V13.6129Z"
              fill="#18354A"
            />
            <path
              d="M116.637 33.9834V40.9153H117.707V33.9834H116.637Z"
              fill="#18354A"
            />
            <path
              d="M111.116 37.0187C110.909 37.4114 110.805 37.8687 110.805 38.39C110.805 38.9053 110.912 39.3573 111.126 39.7468C111.341 40.1363 111.645 40.4381 112.038 40.6529C112.43 40.8673 112.891 40.9746 113.419 40.9746C114.026 40.9746 114.533 40.8096 114.939 40.4797C115.345 40.1492 115.594 39.7269 115.687 39.2122H114.617C114.545 39.4957 114.396 39.7156 114.171 39.8704C113.947 40.0256 113.67 40.1032 113.339 40.1032C112.924 40.1032 112.59 39.9745 112.339 39.7171C112.089 39.4595 111.95 39.1097 111.924 38.6672V38.6079H115.746C115.766 38.4692 115.776 38.3342 115.776 38.202C115.769 37.7135 115.659 37.2877 115.444 36.9247C115.23 36.5614 114.936 36.2807 114.563 36.0826C114.19 35.8849 113.759 35.7856 113.27 35.7856C112.789 35.7856 112.361 35.8928 111.988 36.1076C111.615 36.322 111.325 36.6257 111.116 37.0187ZM114.686 37.8258H111.963C112.003 37.4691 112.15 37.1837 112.404 36.9692C112.658 36.7544 112.96 36.6472 113.31 36.6472C113.686 36.6472 113.998 36.7513 114.246 36.9591C114.493 37.1669 114.64 37.4558 114.686 37.8258Z"
              fill="#18354A"
            />
            <path
              d="M105.596 35.8452L107.467 40.9153H108.775L110.646 35.8452H109.517L108.141 39.7663L106.745 35.8452H105.596Z"
              fill="#18354A"
            />
            <path
              d="M105.675 39.9843H105.467C105.243 39.9843 105.13 39.8657 105.13 39.6279V37.6277C105.13 37.0335 104.946 36.5781 104.576 36.2612C104.206 35.9442 103.681 35.7856 103.001 35.7856C102.361 35.7856 101.842 35.9259 101.447 36.2066C101.05 36.487 100.826 36.8818 100.773 37.3899H101.823C101.862 37.1654 101.983 36.9856 102.184 36.85C102.386 36.715 102.641 36.6472 102.952 36.6472C103.301 36.6472 103.576 36.7282 103.774 36.8897C103.972 37.0515 104.071 37.2745 104.071 37.558V37.8652H102.793C102.087 37.8652 101.549 38.0055 101.179 38.2859C100.81 38.5666 100.624 38.9678 100.624 39.4891C100.624 39.9515 100.796 40.3145 101.139 40.5785C101.483 40.8427 101.938 40.9746 102.506 40.9746C103.239 40.9746 103.797 40.6844 104.179 40.1032C104.179 40.3675 104.252 40.5687 104.398 40.7071C104.543 40.8459 104.78 40.9153 105.11 40.9153H105.675V39.9843ZM104.071 38.6574V38.8356C104.064 39.2318 103.937 39.5487 103.689 39.7865C103.442 40.024 103.097 40.1429 102.655 40.1429C102.364 40.1429 102.135 40.077 101.966 39.9448C101.798 39.8127 101.714 39.6377 101.714 39.42C101.714 39.1693 101.803 38.9795 101.981 38.8508C102.159 38.7218 102.414 38.6574 102.744 38.6574H104.071Z"
              fill="#18354A"
            />
            <path
              d="M100.337 35.8452H100.1C99.7105 35.8452 99.3998 35.913 99.169 36.0479C98.9381 36.1832 98.7498 36.37 98.6047 36.6078L98.4855 35.8452H97.5353V40.9153H98.6047V38.3701C98.6047 37.928 98.7038 37.5631 98.9015 37.2761C99.0999 36.9887 99.42 36.8452 99.8622 36.8452H100.337V35.8452Z"
              fill="#18354A"
            />
            <path
              d="M94.2811 36.7859V39.5386C94.2811 40.0073 94.3918 40.3539 94.6129 40.5784C94.834 40.803 95.1856 40.9153 95.6675 40.9153H96.6973V39.9745H95.8855C95.694 39.9745 95.5584 39.9332 95.4792 39.8505C95.4004 39.7682 95.3607 39.6279 95.3607 39.4298V36.7859H96.5787V35.8452H95.3607V34.4291H94.2811V35.8452H93.3996V36.7859H94.2811Z"
              fill="#18354A"
            />
            <path
              d="M86.7564 39.2415H85.7263C85.7396 39.783 85.9559 40.2069 86.3751 40.5141C86.7942 40.8213 87.3436 40.9746 88.0236 40.9746C88.4263 40.9746 88.7897 40.9102 89.1129 40.7816C89.4365 40.6526 89.6907 40.4681 89.8755 40.2271C90.0607 39.9862 90.1527 39.707 90.1527 39.3901C90.1527 39.0337 90.0638 38.7514 89.8856 38.5436C89.7074 38.3354 89.4696 38.1837 89.1725 38.0882C88.8754 37.9923 88.509 37.9213 88.0731 37.875C87.7498 37.8355 87.5152 37.8009 87.3701 37.7712C87.225 37.7416 87.1042 37.6886 87.0087 37.6126C86.9131 37.5369 86.8652 37.423 86.8652 37.271C86.8652 37.0666 86.9611 36.9045 87.1525 36.7859C87.3436 36.667 87.5947 36.6078 87.905 36.6078C88.2153 36.6078 88.4727 36.6819 88.6774 36.8304C88.8821 36.979 88.9975 37.1688 89.024 37.3997H90.0638C90.031 36.885 89.8146 36.4854 89.4151 36.2015C89.0158 35.9177 88.496 35.7758 87.8555 35.7758C87.466 35.7758 87.1178 35.8417 86.8106 35.9738C86.5037 36.106 86.2628 36.2924 86.0877 36.5333C85.913 36.7743 85.8253 37.0499 85.8253 37.3603C85.8253 37.6902 85.913 37.9526 86.0877 38.1475C86.2628 38.3424 86.4936 38.4843 86.781 38.5732C87.0683 38.6622 87.4329 38.7334 87.8753 38.7861C88.1986 38.8259 88.438 38.8637 88.5935 38.9003C88.7483 38.9362 88.8723 38.9974 88.9647 39.0832C89.0571 39.169 89.1031 39.2977 89.1031 39.4696C89.1031 39.6739 89.0025 39.8376 88.8013 39.9597C88.5998 40.0817 88.3374 40.1429 88.0138 40.1429C87.6508 40.1429 87.3553 40.0587 87.1276 39.8903C86.8999 39.7219 86.7759 39.5058 86.7564 39.2415Z"
              fill="#18354A"
            />
            <path
              d="M81.7361 39.2415H80.7061C80.7193 39.783 80.9357 40.2069 81.3548 40.5141C81.7739 40.8213 82.3233 40.9746 83.0033 40.9746C83.4061 40.9746 83.7694 40.9102 84.0927 40.7816C84.4162 40.6526 84.6704 40.4681 84.8553 40.2271C85.0404 39.9862 85.1325 39.707 85.1325 39.3901C85.1325 39.0337 85.0435 38.7514 84.8653 38.5436C84.6872 38.3354 84.4494 38.1837 84.1523 38.0882C83.8552 37.9923 83.4887 37.9213 83.0528 37.875C82.7296 37.8355 82.4949 37.8009 82.3501 37.7712C82.2048 37.7416 82.0843 37.6886 81.9884 37.6126C81.8928 37.5369 81.8449 37.423 81.8449 37.271C81.8449 37.0666 81.9408 36.9045 82.1322 36.7859C82.3233 36.667 82.5744 36.6078 82.8847 36.6078C83.1951 36.6078 83.4524 36.6819 83.6571 36.8304C83.8618 36.979 83.9772 37.1688 84.0037 37.3997H85.0435C85.0107 36.885 84.7944 36.4854 84.3948 36.2015C83.9955 35.9177 83.4758 35.7758 82.8352 35.7758C82.4457 35.7758 82.0975 35.8417 81.7903 35.9738C81.4835 36.106 81.2425 36.2924 81.0675 36.5333C80.8928 36.7743 80.8051 37.0499 80.8051 37.3603C80.8051 37.6902 80.8928 37.9526 81.0675 38.1475C81.2425 38.3424 81.4734 38.4843 81.7607 38.5732C82.048 38.6622 82.4126 38.7334 82.8551 38.7861C83.1784 38.8259 83.4177 38.8637 83.5732 38.9003C83.7281 38.9362 83.852 38.9974 83.9444 39.0832C84.0368 39.169 84.0829 39.2977 84.0829 39.4696C84.0829 39.6739 83.9823 39.8376 83.7811 39.9597C83.5795 40.0817 83.3171 40.1429 82.9935 40.1429C82.6305 40.1429 82.335 40.0587 82.1073 39.8903C81.8796 39.7219 81.7557 39.5058 81.7361 39.2415Z"
              fill="#18354A"
            />
            <path
              d="M75.393 37.0187C75.1852 37.4114 75.0811 37.8687 75.0811 38.39C75.0811 38.9053 75.1883 39.3573 75.4031 39.7468C75.6176 40.1363 75.9213 40.4381 76.3143 40.6529C76.7069 40.8673 77.1674 40.9746 77.6957 40.9746C78.3028 40.9746 78.8096 40.8096 79.2155 40.4797C79.6217 40.1492 79.8709 39.7269 79.9633 39.2122H78.8938C78.8209 39.4957 78.6727 39.7156 78.4482 39.8704C78.2236 40.0256 77.9464 40.1032 77.6162 40.1032C77.2005 40.1032 76.8671 39.9745 76.6161 39.7171C76.3654 39.4595 76.2266 39.1097 76.2001 38.6672V38.6079H80.0226C80.0424 38.4692 80.0522 38.3342 80.0522 38.202C80.0459 37.7135 79.9352 37.2877 79.7207 36.9247C79.506 36.5614 79.2123 36.2807 78.8392 36.0826C78.4665 35.8849 78.0356 35.7856 77.5471 35.7856C77.0649 35.7856 76.6375 35.8928 76.2648 36.1076C75.8917 36.322 75.6012 36.6257 75.393 37.0187ZM78.9632 37.8258H76.2398C76.2793 37.4691 76.4262 37.1837 76.6804 36.9692C76.9346 36.7544 77.2368 36.6472 77.5868 36.6472C77.9628 36.6472 78.2747 36.7513 78.5223 36.9591C78.7702 37.1669 78.9168 37.4558 78.9632 37.8258Z"
              fill="#18354A"
            />
            <path
              d="M73.7297 36.3403C73.35 35.9707 72.8599 35.7856 72.2591 35.7856C71.5596 35.7856 71.0181 36.0268 70.6352 36.5087L70.5163 35.8452H69.5853V40.9153H70.6551V38.3604C70.6551 37.8453 70.7752 37.441 71.0165 37.1474C71.2574 36.8534 71.5892 36.7068 72.0115 36.7068C72.4076 36.7068 72.7082 36.8323 72.9126 37.083C73.1173 37.3338 73.2198 37.7003 73.2198 38.1822V40.9153H74.299V38.1226C74.299 37.3041 74.1091 36.7099 73.7297 36.3403Z"
              fill="#18354A"
            />
            <path
              d="M67.4662 35.8452V40.9153H68.5357V35.8452H67.4662Z"
              fill="#18354A"
            />
            <path
              d="M68.4663 33.9983C68.3408 33.8762 68.1856 33.815 68.0008 33.815C67.816 33.815 67.6608 33.8762 67.5353 33.9983C67.4101 34.1203 67.3473 34.2739 67.3473 34.4587C67.3473 34.6435 67.4101 34.7971 67.5353 34.9192C67.6608 35.0412 67.816 35.1024 68.0008 35.1024C68.1856 35.1024 68.3408 35.0412 68.4663 34.9192C68.5915 34.7971 68.6542 34.6435 68.6542 34.4587C68.6542 34.2739 68.5915 34.1203 68.4663 33.9983Z"
              fill="#18354A"
            />
            <path
              d="M63.1981 39.2415H62.1683C62.1813 39.783 62.3976 40.2069 62.8168 40.5141C63.2362 40.8213 63.7856 40.9746 64.4656 40.9746C64.8683 40.9746 65.2313 40.9102 65.5549 40.7816C65.8785 40.6526 66.1327 40.4681 66.3172 40.2271C66.5023 39.9862 66.5948 39.707 66.5948 39.3901C66.5948 39.0337 66.5055 38.7514 66.3273 38.5436C66.1491 38.3354 65.9113 38.1837 65.6142 38.0882C65.3174 37.9923 64.951 37.9213 64.5151 37.875C64.1915 37.8355 63.9572 37.8009 63.8121 37.7712C63.6667 37.7416 63.5462 37.6886 63.4507 37.6126C63.3548 37.5369 63.3069 37.423 63.3069 37.271C63.3069 37.0666 63.4027 36.9045 63.5942 36.7859C63.7856 36.667 64.0364 36.6078 64.3467 36.6078C64.6573 36.6078 64.9147 36.6819 65.1191 36.8304C65.3238 36.979 65.4395 37.1688 65.4657 37.3997H66.5055C66.4727 36.885 66.2564 36.4854 65.8571 36.2015C65.4575 35.9177 64.9377 35.7758 64.2972 35.7758C63.9077 35.7758 63.5595 35.8417 63.2526 35.9738C62.9454 36.106 62.7045 36.2924 62.5298 36.5333C62.3547 36.7743 62.2674 37.0499 62.2674 37.3603C62.2674 37.6902 62.3547 37.9526 62.5298 38.1475C62.7045 38.3424 62.9357 38.4843 63.2227 38.5732C63.51 38.6622 63.8746 38.7334 64.317 38.7861C64.6406 38.8259 64.8797 38.8637 65.0352 38.9003C65.19 38.9362 65.314 38.9974 65.4064 39.0832C65.4988 39.169 65.5448 39.2977 65.5448 39.4696C65.5448 39.6739 65.4442 39.8376 65.243 39.9597C65.0415 40.0817 64.7791 40.1429 64.4558 40.1429C64.0925 40.1429 63.7973 40.0587 63.5693 39.8903C63.3419 39.7219 63.2179 39.5058 63.1981 39.2415Z"
              fill="#18354A"
            />
            <path
              d="M61.2966 35.8452H60.2274V38.3603C60.2274 38.8817 60.1117 39.2926 59.8808 39.5932C59.6497 39.8934 59.3295 40.0439 58.9202 40.0439C58.5307 40.0439 58.2367 39.9152 58.0387 39.6575C57.8406 39.4002 57.7416 39.0236 57.7416 38.5288V35.8452H56.6721V38.6376C56.6721 39.4563 56.8573 40.0502 57.2269 40.4201C57.5965 40.7898 58.0784 40.9746 58.6726 40.9746C59.333 40.9746 59.8544 40.7402 60.2372 40.2716L60.3561 40.9153H61.2966V35.8452Z"
              fill="#18354A"
            />
            <path
              d="M54.7316 36.0975C54.3683 35.8896 53.9557 35.7855 53.4937 35.7855C52.8005 35.7855 52.2524 36.0565 51.8499 36.5977V33.9834H50.7805V40.9153H51.7112L51.8401 40.1823C52.0117 40.4267 52.2363 40.6198 52.5132 40.7617C52.7907 40.9036 53.1171 40.9746 53.4937 40.9746C53.9557 40.9746 54.3683 40.8658 54.7316 40.6478C55.0946 40.4302 55.3784 40.1246 55.5831 39.7319C55.7878 39.339 55.89 38.8883 55.89 38.3802C55.89 37.8453 55.7878 37.3833 55.5831 36.9938C55.3784 36.6043 55.0946 36.3056 54.7316 36.0975ZM54.3897 39.6033C54.116 39.9168 53.7577 40.0735 53.3155 40.0735C52.873 40.0735 52.5163 39.9152 52.246 39.5982C51.9754 39.2813 51.8401 38.8719 51.8401 38.3701C51.8401 37.875 51.9754 37.4725 52.246 37.1622C52.5163 36.8519 52.873 36.6967 53.3155 36.6967C53.7577 36.6967 54.116 36.8534 54.3897 37.1669C54.6638 37.4807 54.8007 37.8851 54.8007 38.3802C54.8007 38.882 54.6638 39.2895 54.3897 39.6033Z"
              fill="#18354A"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_489">
              <rect
                width="158.954"
                height="41"
                fill="white"
                transform="translate(0.0230713 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      <div className="text-white flex flex-row gap-8 text-base ">
        <a className="hover" href="#">{translations.home}</a>
        <a className="hovert" href="#about-us">{translations.about}</a>
        <a className="hovert" href="#tours">{translations.tour}</a>
        <a className="hovert" href="#contact">{translations.contacts}</a>
      </div>
      <div className="flex flex-row gap-5 text-white align-middle text-center items-center">
        <h1 className="lang-hover" onClick={()=> nav('/uz')} >UZ</h1>
        <h1 className="lang-hover" onClick={()=> nav('/en')} >EN</h1>
        <h1 className="lang-hover" onClick={()=> nav('/ru')} >RU</h1>
        <a href="https://t.me/zamonbiznestour" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1503_421)">
            <path
              d="M16.8177 8.502L10.7318 13.4765L10.4454 13.7111C10.3825 13.761 10.3414 13.8333 10.3309 13.9129L10.2668 14.442L10.0909 15.9284C10.0925 15.9465 10.0869 15.9644 10.0752 15.9784C10.0636 15.9923 10.0469 16.0011 10.0288 16.0027C10.0107 16.0043 9.99275 15.9987 9.97882 15.9871C9.96488 15.9754 9.95613 15.9587 9.95451 15.9406L9.45951 14.4543L8.94814 12.9338C8.92633 12.8657 8.92912 12.7921 8.95603 12.7258C8.98295 12.6595 9.03227 12.6047 9.09542 12.5711L15.4281 8.94109L16.62 8.25928C16.7931 8.15837 16.9704 8.37655 16.8177 8.502Z"
              fill="white"
            ></path>
            <path
              d="M20.7273 0H3.27273C2.40475 0 1.57232 0.344804 0.95856 0.95856C0.344804 1.57232 0 2.40475 0 3.27273L0 20.7273C0 21.5953 0.344804 22.4277 0.95856 23.0414C1.57232 23.6552 2.40475 24 3.27273 24H20.7273C21.5953 24 22.4277 23.6552 23.0414 23.0414C23.6552 22.4277 24 21.5953 24 20.7273V3.27273C24 2.40475 23.6552 1.57232 23.0414 0.95856C22.4277 0.344804 21.5953 0 20.7273 0ZM19.485 6.94636L17.1423 17.2977C17.0318 17.7832 16.4155 18.0027 15.9832 17.7068L12.4459 15.3068L10.6445 17.01C10.5711 17.0789 10.4819 17.1289 10.3848 17.1555C10.2877 17.1822 10.1855 17.1848 10.0871 17.163C9.9888 17.1412 9.89725 17.0958 9.82044 17.0306C9.74363 16.9655 9.68387 16.8826 9.64636 16.7891L8.99591 14.88L8.34546 12.9709L4.85864 12.0164C4.76115 11.9951 4.67342 11.9422 4.60909 11.8659C4.54477 11.7896 4.50745 11.6942 4.50294 11.5945C4.49843 11.4948 4.52698 11.3964 4.58415 11.3147C4.64133 11.2329 4.72392 11.1723 4.81909 11.1423L18.2891 6.28909L18.5373 6.20045C19.0595 6.01773 19.5995 6.44045 19.485 6.94636Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1503_421">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        </a>
        <a href="https://www.instagram.com/zamontour" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1503_426)">
            <path
              d="M12.0037 5.83789C8.6007 5.83789 5.8457 8.59589 5.8457 11.9959C5.8457 15.3989 8.6037 18.1539 12.0037 18.1539C15.4067 18.1539 18.1617 15.3959 18.1617 11.9959C18.1617 8.59289 15.4037 5.83789 12.0037 5.83789ZM12.0037 15.9929C9.7947 15.9929 8.0067 14.2039 8.0067 11.9959C8.0067 9.78789 9.7957 7.99889 12.0037 7.99889C14.2117 7.99889 16.0007 9.78789 16.0007 11.9959C16.0017 14.2039 14.2127 15.9929 12.0037 15.9929Z"
              fill="white"
            ></path>
            <path
              d="M16.948 0.0763632C14.74 -0.0266368 9.27098 -0.0216368 7.06098 0.0763632C5.11898 0.167363 3.40598 0.636363 2.02498 2.01736C-0.283017 4.32536 0.0119831 7.43536 0.0119831 11.9964C0.0119831 16.6644 -0.248017 19.7024 2.02498 21.9754C4.34198 24.2914 7.49698 23.9884 12.004 23.9884C16.628 23.9884 18.224 23.9914 19.859 23.3584C22.082 22.4954 23.76 20.5084 23.924 16.9394C24.028 14.7304 24.022 9.26236 23.924 7.05236C23.726 2.83936 21.465 0.284363 16.948 0.0763632ZM20.443 20.4484C18.93 21.9614 16.831 21.8264 11.975 21.8264C6.97498 21.8264 4.96998 21.9004 3.50698 20.4334C1.82198 18.7564 2.12698 16.0634 2.12698 11.9804C2.12698 6.45536 1.55998 2.47636 7.10498 2.19236C8.37898 2.14736 8.75398 2.13236 11.961 2.13236L12.006 2.16236C17.335 2.16236 21.516 1.60436 21.767 7.14836C21.824 8.41336 21.837 8.79336 21.837 11.9954C21.836 16.9374 21.93 18.9544 20.443 20.4484Z"
              fill="white"
            ></path>
            <path
              d="M18.406 7.03425C19.2008 7.03425 19.845 6.38999 19.845 5.59525C19.845 4.80051 19.2008 4.15625 18.406 4.15625C17.6113 4.15625 16.967 4.80051 16.967 5.59525C16.967 6.38999 17.6113 7.03425 18.406 7.03425Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1503_426">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
