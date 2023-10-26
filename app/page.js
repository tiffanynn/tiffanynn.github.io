// import image from './main_picture.jpg'
import styles from './page.module.css'

// console.log({image})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <h2>tiffany nguyen</h2>
         software developer from san jose, california
        </p>

      </div>
      
      <div className={styles.img_placement}>
        {/* <img src={image} /> */}
      </div>
      

      <div className={styles.grid}>
        <h2>
          about me
        </h2>
        <p>hi, i'm tiffany! 😄 i'm an <b>alumna</b> from san jose state who studied computer engineering. in my free time <b></b> programming, i love to:
        <li>try out new restaruants</li>
        <li>attend DIY shows</li>
        <li>collect cute stationary</li>
        <li>give back to my community</li>
        <li>play video games</li>
        
        </p>

        <h2>
          projects
        </h2>
        <p>this website
          foodify.us
          blips
        </p>

        <h2>
          experience
        </h2>
        <dates>january 2022 - september 2023</dates>
        <dates>may 2021 - august 2021</dates>
        <dates>june 2020 - august 2021</dates>
        <p>
          grainite
          software engineer

          amazon web services
          software engineer intern

          cisco systems 
          software engineer intern
        </p>
      </div>
    </main>
  )
}
