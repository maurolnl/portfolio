import { SiLinkedin, SiTwitter } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import styles from './Hero.module.css'
import { useRef } from 'react'

const Hero = () => {
 const leng = useRef(null)
  if (leng.current) {
    console.log(leng.current.getTotalLength());
  }
  return (
    <section className={styles.landing_section}>
      <div className={styles.hero_container}>
        <svg
          className={styles.logo}
          viewBox="0 0 199 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={leng}
            d="M196.982 222.501V88.5024C196.982 87.0043 196.867 85.1859 196.381 83.3293C195.923 81.5779 194.844 78.6842 192.095 76.3822C188.943 73.7427 185.206 73.1985 182.19 73.6715C179.57 74.0822 177.546 75.2157 176.332 76.0096C173.872 77.6182 171.666 79.9021 169.881 81.9567C167.961 84.1667 165.922 86.8265 163.829 89.7554C155.532 101.366 144.719 119.558 134.152 138.284C126.604 151.662 119.064 165.522 112.482 177.829V133.752C112.486 133.59 112.486 133.428 112.482 133.266V88.5024C112.482 82.4273 107.557 77.5024 101.482 77.5024C95.4072 77.5024 90.4823 82.4273 90.4823 88.5024V131.08C90.152 131.786 89.7423 132.656 89.2587 133.672C87.8133 136.707 85.7113 141.038 83.102 146.184C77.869 156.504 70.6594 169.976 62.6619 182.81C54.5555 195.819 46.0783 207.453 38.4111 214.626C34.5416 218.246 31.5888 220.047 29.6484 220.71C28.2839 221.176 28.0643 220.931 28.0036 220.864C27.9979 220.857 27.9936 220.852 27.9899 220.85C28.0564 220.894 28.0902 220.918 28.0959 220.912C28.1366 220.872 26.7178 219.333 25.546 213.313C24.36 207.219 23.8593 198.83 24.0341 188.549C24.382 168.081 27.354 142.099 31.2497 116.268C35.1321 90.5249 39.8733 65.3059 43.6507 46.4964C45.5379 37.0991 47.1811 29.3187 48.3512 23.8938C48.9361 21.1816 49.4026 19.0592 49.7219 17.6188C49.8815 16.8986 50.0044 16.349 50.0869 15.9816C50.1281 15.7978 50.1592 15.6596 50.1798 15.5685L50.2095 15.4373C51.5542 9.51286 47.8417 3.62003 41.9172 2.27527C35.9928 0.93052 30.1 4.64308 28.7552 10.5675M174.982 222.501V112.588C168.535 122.646 160.989 135.492 153.312 149.096C142.822 167.687 132.313 187.289 124.416 202.266C120.47 209.749 117.182 216.066 114.882 220.509C113.732 222.731 112.829 224.483 112.215 225.679C111.908 226.277 111.673 226.735 111.515 227.043L111.282 227.498L111.28 227.503M111.279 227.504C108.967 232.033 103.853 234.386 98.9099 233.197C93.9667 232.008 90.4823 227.587 90.4823 222.502V179.011C87.6099 184.085 84.5385 189.302 81.3335 194.445C72.9789 207.852 63.2764 221.49 53.4416 230.691C48.56 235.258 42.9312 239.421 36.7591 241.529C30.1398 243.79 22.6182 243.709 15.7865 239.155C8.36584 234.208 5.41435 225.033 3.95125 217.516C2.33967 209.236 1.85163 199.097 2.03726 188.175C2.41016 166.236 5.55543 139.114 9.49574 112.987C13.4494 86.7715 18.263 61.178 22.0814 42.1647C23.9921 32.6505 25.657 24.7668 26.8457 19.2556C27.44 16.4996 27.9155 14.3359 28.2434 12.8572C28.4073 12.1178 28.5343 11.5496 28.6208 11.1642C28.664 10.9715 28.6972 10.8244 28.7197 10.7245L28.7543 10.5714M174.982 222.502C174.982 228.578 179.907 233.502 185.982 233.502C192.057 233.502 196.982 228.578 196.982 222.502"
            stroke="#5F9EA0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
      </div>
      <div className={styles.hero_content}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Mauro Leonel Quiroga</h1>
        </div>
        <div className={styles.hero_social_media_container}>
          <p className={styles.hero_description}>
            Hey, I&apos;m a passionate full-stack Web Developer based on San
            Luis, Argentina{" "}
          </p>
          {/*}<a
            href="https://github.com/maurolnl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub color={"#db6899"} size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/maurolnl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin size={24} color={"#db6899"} />{" "}
          </a>
          <a
            href="https://twitter.com/maurolquiroga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter size={24} color={"#db6899"} />{" "}
          </a>*/}
        </div>

      </div>
    </section>
  );
};

export default Hero;
