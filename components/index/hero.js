const Hero = ({ hero, tag }) => {
  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container d-flex">
          <div className="hero-texts col">
            <h2 className="f-ap-b">{tag[0].text}</h2>
            <h1 className="f-ap-b">{hero[0].text}</h1>
          </div>
          {/* /.hero-texts */}
          <div className="hero-image">
            <svg
              width="365"
              height="362"
              viewBox="0 0 365 362"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.11 193.087C364.11 190.119 364.11 188.537 364.11 185.569C364.11 184.777 363.911 183.788 363.911 182.997C362.518 176.665 356.549 171.323 349.187 170.73C341.826 170.136 337.448 169.542 331.28 168.949C328.694 168.751 326.505 166.97 325.709 164.596C324.516 161.43 323.322 158.265 321.73 155.297C320.735 152.923 320.934 150.153 322.526 148.174C326.505 143.426 329.291 140.062 333.867 134.522C338.443 128.982 339.04 120.87 335.459 115.528C335.061 114.737 334.464 114.143 333.867 113.55C331.678 111.373 330.684 110.384 328.495 108.208C320.337 100.095 316.159 95.9405 308.001 87.8285C305.813 85.6521 304.818 84.6628 302.629 82.4864C302.032 81.8928 301.435 81.2993 300.639 80.9036C295.267 77.3422 287.11 77.7379 281.539 82.4864C275.967 87.0371 272.585 89.807 267.81 93.7641C265.82 95.347 263.035 95.7427 260.647 94.5555C257.464 93.1706 254.28 91.7856 251.097 90.5984C248.709 89.807 246.918 87.6306 246.719 85.0585C246.122 79.1229 245.724 74.5722 245.128 67.4494C244.531 60.1288 239.159 54.1932 232.792 52.8082C231.996 52.6104 231.2 52.6104 230.205 52.6104H222.644C211.104 52.6104 205.334 52.6104 193.794 52.6104H186.233C185.437 52.6104 184.442 52.6104 183.647 52.8082C177.28 54.1932 171.908 60.1288 171.311 67.4494C171.311 68.4387 171.112 69.2301 171.112 70.2194C173.3 70.4173 175.29 70.6151 178.076 70.813C182.453 71.2087 186.034 74.3744 186.83 78.3315C187.029 78.925 187.029 79.3207 187.029 79.9143V84.465V101.678V106.229C187.029 106.823 187.029 107.218 186.83 107.812C186.034 111.571 182.453 114.935 178.076 115.33C173.698 115.726 170.913 115.924 167.132 116.32C165.541 116.517 164.347 117.507 163.75 118.892C162.954 120.672 162.357 122.651 161.362 124.432C161.163 125.817 161.163 127.399 162.158 128.587C164.546 131.554 166.336 133.533 169.122 136.896C171.908 140.26 172.305 145.206 170.117 148.372C169.918 148.768 169.52 149.163 169.122 149.559C167.928 150.746 167.132 151.538 165.939 152.725C160.964 157.671 158.577 160.045 153.603 164.992C152.409 166.179 151.613 166.97 150.419 168.157C150.021 168.553 149.623 168.751 149.225 169.147C146.042 171.323 141.068 170.927 137.685 168.157C134.303 165.388 132.114 163.607 129.13 161.233C127.936 160.243 126.344 160.045 124.951 160.639C123.161 161.43 121.37 162.222 119.579 162.815C118.186 163.409 116.993 164.596 116.993 166.179C116.595 169.938 116.396 172.708 115.998 177.061C115.6 181.414 112.416 184.975 108.437 185.767C107.84 185.964 107.442 185.964 106.845 185.964C105.054 185.964 104.06 185.964 102.269 185.964H84.9588C83.1681 185.964 82.1732 185.964 80.3825 185.964C79.7856 185.964 79.3877 185.964 78.7908 185.767C75.0104 184.975 71.628 181.414 71.23 177.061C71.0311 174.291 70.8321 172.312 70.6331 170.136C69.6383 170.136 68.8424 170.334 67.6486 170.334C60.2868 170.927 54.3178 176.27 52.925 182.601C52.7261 183.392 52.7261 184.382 52.7261 185.173C52.7261 188.141 52.7261 189.724 52.7261 192.691V221.38C52.7261 224.348 52.7261 225.931 52.7261 228.899C52.7261 229.69 52.925 230.68 52.925 231.471C54.3178 237.802 60.2868 243.144 67.6486 243.738C75.0104 244.529 79.3877 244.925 85.7547 245.519C88.3412 245.717 90.5299 247.497 91.3257 249.871C92.5196 253.037 93.7134 256.005 95.1061 258.973C96.101 261.347 95.902 264.117 94.3103 266.096C90.3309 270.844 87.5454 274.405 82.7701 279.945C78.1939 285.485 77.597 293.597 81.1784 298.939C81.5763 299.731 82.1732 300.324 82.7701 300.918L88.1423 306.26C96.2999 314.372 100.478 318.527 108.636 326.639L114.008 331.981C114.605 332.575 115.202 333.168 115.998 333.564C121.37 337.125 129.527 336.73 135.099 331.981C140.869 327.233 144.251 324.463 149.225 320.308C151.215 318.725 154 318.329 156.388 319.516C159.373 320.901 162.357 322.088 165.541 323.276C167.928 324.067 169.719 326.243 169.918 328.815C170.515 335.147 170.913 339.5 171.709 347.018C172.305 354.339 177.678 360.274 184.045 361.659C184.84 361.857 185.636 361.857 186.631 361.857H194.192C205.732 361.857 211.502 361.857 223.042 361.857H230.603C231.399 361.857 232.394 361.857 233.189 361.659C239.556 360.274 244.929 354.339 245.525 347.018C246.321 339.5 246.719 335.147 247.316 328.815C247.515 326.243 249.306 324.067 251.693 323.276C254.877 322.088 257.861 320.901 260.846 319.516C263.234 318.527 266.019 318.725 268.009 320.308C272.983 324.265 276.365 327.233 282.135 331.981C287.707 336.532 295.864 337.125 301.236 333.564C302.032 333.168 302.629 332.575 303.226 331.981C305.415 329.805 306.409 328.815 308.598 326.639C316.756 318.527 320.934 314.372 329.092 306.26C331.28 304.084 332.275 303.094 334.464 300.918C335.061 300.324 335.658 299.731 336.056 298.939C339.637 293.597 339.239 285.485 334.464 279.945C329.689 274.208 326.903 270.844 322.924 266.096C321.332 264.117 320.934 261.347 322.128 258.973C323.521 256.005 324.714 252.839 325.908 249.871C326.704 247.497 328.893 245.717 331.479 245.519C337.647 244.925 342.224 244.529 349.585 243.738C356.947 243.144 362.916 237.802 364.309 231.471C364.508 230.68 364.508 229.888 364.508 228.899C364.508 225.931 364.508 224.348 364.508 221.38V193.087H364.11Z"
                fill="#FFDB00"
              />
              <path
                d="M91.326 164.615C92.5198 161.449 93.7136 158.284 95.3053 155.316C96.3001 152.942 96.1012 150.172 94.5094 148.193C90.5301 143.445 87.7446 140.081 83.1683 134.541C78.5921 129.001 77.9952 120.889 81.5766 115.547C81.9745 114.756 82.5714 114.162 83.1683 113.569C85.3569 111.392 86.3518 110.403 88.5404 108.227C96.6981 100.114 100.876 95.9595 109.034 87.8475C111.223 85.6711 112.218 84.6818 114.406 82.5054C115.003 81.9118 115.6 81.3183 116.396 80.9226C121.768 77.3612 129.926 77.7569 135.497 82.5054C141.068 87.0561 144.45 89.826 149.225 93.7831C151.215 95.366 154.001 95.7617 156.388 94.5745C159.572 93.1896 162.755 91.8046 165.939 90.6175C168.326 89.826 170.117 87.6496 170.316 85.0775C170.714 79.9333 171.112 75.7784 171.709 70.2384C170.515 70.0406 169.321 70.0406 167.928 69.8427C166.337 69.6449 165.143 68.6556 164.546 67.2706C163.75 65.2921 163.153 63.5114 162.158 61.7307C161.561 60.3457 161.76 58.7629 162.755 57.5757C165.143 54.8058 166.735 52.6294 169.719 49.2658C172.505 45.9023 172.903 41.1538 170.714 37.7903C170.515 37.3945 170.117 36.9988 169.719 36.6031C168.525 35.416 167.729 34.6246 166.536 33.4374C161.561 28.4911 159.174 26.1168 154.2 21.1705C153.006 19.9833 152.21 19.1919 151.016 18.0048C150.618 17.6091 150.22 17.4112 149.822 17.0155C146.639 14.8391 141.665 15.2348 138.282 18.0048C134.9 20.7747 132.91 22.5554 130.125 24.7318C128.931 25.7211 127.339 25.919 125.946 25.3254C124.156 24.534 122.166 23.7426 120.176 22.9511C118.783 22.3576 117.59 21.1705 117.59 19.5876C117.192 16.0262 116.993 13.2563 116.595 8.90346C116.197 4.55066 113.013 0.989274 109.034 0.197855C107.84 0 107.442 0 106.845 0H102.269C95.3053 0 91.9229 0 84.959 0H80.3828C79.7859 0 79.3879 0 78.791 0.197855C75.0107 0.989274 71.6282 4.55066 71.2303 8.90346C70.8323 13.2563 70.6334 15.8284 70.2354 19.5876C70.0365 21.1705 69.0416 22.3576 67.6489 22.9511C65.6592 23.7426 63.8685 24.534 61.8788 25.3254C60.486 25.919 58.8943 25.7211 57.7005 24.7318C54.915 22.3576 52.7263 20.7747 49.5428 18.0048C46.1604 15.2348 41.3852 14.8391 38.0027 17.0155C37.6048 17.2134 37.2069 17.6091 36.8089 18.0048C35.6151 19.1919 34.8193 19.9833 33.6255 21.1705C28.6513 26.1168 26.2637 28.4911 21.2895 33.4374C20.0957 34.6246 19.2998 35.416 18.106 36.6031C17.7081 36.9988 17.5091 37.3945 17.1112 37.7903C14.9225 40.9559 15.3205 45.9023 18.106 49.2658C20.8916 52.6294 22.6823 54.6079 25.0699 57.5757C26.0647 58.7629 26.2637 60.3457 25.6668 61.7307C24.8709 63.5114 24.075 65.4899 23.2792 67.2706C22.6823 68.6556 21.4885 69.8427 19.8967 69.8427C16.1163 70.2384 13.5298 70.4363 9.15249 70.832C4.77521 71.2277 1.1938 74.3934 0.397934 78.3505C0 78.944 0 79.5376 0 79.9333V84.484V101.697V106.248C0 106.842 0 107.237 0.198967 107.831C0.994836 111.59 4.57625 114.954 8.95353 115.349C13.3308 115.745 16.1163 115.943 19.8967 116.339C21.4885 116.536 22.6823 117.526 23.2792 118.911C23.8761 120.691 24.6719 122.67 25.6668 124.451C26.2637 125.836 26.0647 127.418 25.0699 128.606C22.6823 131.573 20.8916 133.552 18.106 136.915C15.3205 140.477 14.9225 145.225 17.1112 148.391C17.3102 148.787 17.7081 149.182 18.106 149.578C19.2998 150.765 20.0957 151.557 21.2895 152.744C26.2637 157.69 28.6513 160.064 33.6255 165.011C34.8193 166.198 35.6151 166.989 36.8089 168.176C37.2069 168.572 37.6048 168.77 38.0027 169.166C41.1862 171.342 46.1604 170.946 49.5428 168.176C52.9253 165.407 55.1139 163.626 58.0984 161.252C59.2922 160.262 60.884 160.064 62.2767 160.658C64.0675 161.449 65.8582 162.241 67.6489 162.834C69.0416 163.428 70.2354 164.615 70.2354 166.198C70.4344 167.583 70.4344 168.968 70.6334 170.155C76.2045 169.561 80.3828 169.166 85.5559 168.77C88.3415 168.77 90.5301 166.989 91.326 164.615Z"
                fill="#FF4263"
              />
              <path
                d="M78.7912 185.992C79.3881 186.19 79.786 186.19 80.3829 186.19C82.1736 186.19 83.1685 186.19 84.9592 186.19H102.269C104.06 186.19 105.055 186.19 106.846 186.19C107.442 186.19 107.84 186.19 108.437 185.992C112.218 185.2 115.6 181.639 115.998 177.286C116.396 172.735 116.595 170.163 116.993 166.404C117.192 164.821 118.187 163.634 119.579 163.041C121.37 162.447 123.36 161.656 124.952 160.864C126.344 160.271 127.936 160.468 129.13 161.458C132.114 163.832 134.104 165.613 137.685 168.383C141.068 171.153 145.843 171.548 149.226 169.372C149.623 169.174 150.021 168.778 150.419 168.383C151.613 167.196 152.409 166.404 153.603 165.217C158.577 160.271 160.965 157.896 165.939 152.95C167.133 151.763 167.928 150.971 169.122 149.784C169.52 149.389 169.719 148.993 170.117 148.597C172.306 145.432 171.908 140.485 169.122 137.122C166.337 133.758 164.546 131.582 162.158 128.812C161.164 127.625 160.965 126.042 161.562 124.657C162.357 122.876 163.153 121.095 163.949 119.117C164.546 117.732 165.74 116.545 167.332 116.545C171.112 116.149 173.699 115.951 178.275 115.555C182.652 115.16 186.233 111.994 187.029 108.037C187.228 107.443 187.228 107.048 187.228 106.454V101.903V84.6901V80.1395C187.228 79.5459 187.228 79.1502 187.029 78.5566C186.233 74.7974 182.652 71.4339 178.275 71.0382C175.489 70.8403 173.301 70.6424 171.311 70.4446C170.714 75.9845 170.316 80.1395 169.918 85.2837C169.719 87.8558 167.928 90.0322 165.541 90.8236C162.357 92.0107 159.174 93.3957 155.99 94.7807C153.603 95.77 150.817 95.5721 148.828 93.9893C144.052 90.0322 140.67 87.2622 135.099 82.7116C129.528 78.1609 121.37 77.5674 115.998 81.1287C115.202 81.5244 114.605 82.118 114.008 82.7116C111.82 84.888 110.825 85.8772 108.636 88.0537C100.479 96.1657 96.3003 100.321 88.1426 108.433C85.954 110.609 84.9592 111.598 82.7705 113.775C82.1736 114.368 81.5767 114.962 81.1788 115.753C77.5974 121.095 77.9953 129.207 82.7705 134.747C87.3468 140.287 90.3313 143.849 94.1117 148.399C95.7034 150.378 96.1013 153.148 94.9075 155.522C93.5148 158.49 92.122 161.656 90.9282 164.821C90.1323 167.196 87.9437 168.976 85.3571 169.174C80.184 169.768 76.0057 169.965 70.4346 170.559C70.6335 172.538 70.8325 174.714 71.0315 177.484C71.8273 181.639 75.0108 185.2 78.7912 185.992Z"
                fill="white"
              />
              <path
                d="M207.326 226.948C193.995 226.948 183.052 216.066 183.052 202.809C183.052 189.553 193.995 178.671 207.326 178.671C220.657 178.671 231.6 189.553 231.6 202.809C231.6 216.066 220.855 226.948 207.326 226.948Z"
                fill="#4C1BD4"
              />
              <path
                d="M208.124 290.831C168.33 290.831 133.312 264.318 123.165 225.341C121.175 217.822 125.751 210.304 133.312 208.325C140.873 206.347 148.434 210.897 150.423 218.416C157.785 246.907 184.646 265.505 214.093 262.537C227.026 261.35 238.964 256.008 248.514 247.5C254.284 242.356 263.238 242.752 268.411 248.49C273.584 254.227 273.186 263.131 267.416 268.275C253.289 280.938 235.78 288.654 216.878 290.435C213.894 290.831 210.909 290.831 208.124 290.831Z"
                fill="white"
              />
              <path
                d="M257.862 272.042C254.081 272.042 250.102 270.459 247.515 267.491C242.342 261.754 242.74 252.85 248.51 247.706C262.637 234.845 269.8 216.841 268.009 197.847C267.412 191.317 265.621 184.986 263.035 178.853C259.851 171.73 263.035 163.42 269.999 160.254C277.162 157.088 285.518 160.254 288.702 167.179C292.681 175.885 295.268 185.382 296.063 194.879C298.65 222.183 288.105 249.685 267.412 268.085C264.627 270.855 261.244 272.042 257.862 272.042Z"
                fill="white"
              />
              <path
                d="M275.568 186.984C270.196 186.984 265.023 184.017 262.834 178.675C254.875 161.065 238.759 148.403 219.658 144.841C212.097 143.456 207.123 136.136 208.516 128.419C209.909 120.901 217.27 115.757 225.03 117.34C253.085 122.682 276.762 141.28 288.501 167.001C291.684 174.124 288.501 182.434 281.537 185.599C279.547 186.589 277.558 186.984 275.568 186.984Z"
                fill="#4C1BD4"
              />
            </svg>
          </div>
          {/* /.hero-image */}
        </div>
        {/* ./container */}
      </section>
      {/* ./hero */}
      <style jsx>{`
        section.hero {
          background: white;
          //padding: 260px 0;
          height: calc(100vh - 138px);
          min-height: 500px;
          .hero-texts {
            h2 {
              font-size: 16px;
              color: #442acc;
              text-transform: uppercase;
              margin: 0 0 40px 0;
            }
            h1 {
              font-size: 72px;
              color: #221f20;
              max-width: 647px;
              line-height: 110%;
              margin: 0;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Hero;