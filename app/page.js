import image from 'public/main_picture.jpg'
import styles from './page.module.css'
import Image from 'next/image'

console.log({image})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>tiffany nguyen</h2>

        <p>
         software developer from san jose, california
        </p>

      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column',  justify: 'left', margin: 0 }}>
        <Image layout="" src={image} height={400} style={{ alignSelf: 'left' }} />
      </div>
      

      <div className={styles.grid}>
        <h2>
          about me
        </h2>
        <p>hi, i'm tiffany! 😄 i'm an <b>alumna</b> from san jose state who studied computer engineering. in my free time <b></b> programming, i love to:
        </p>
        <li>try out new restaruants</li>
        <li>attend DIY shows</li>
        <li>collect cute stationary</li>
        <li>give back to my community</li>
        <li>play video games</li>
      
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
        <p>january 2022 - september 2023</p>
        <p>may 2021 - august 2021</p>
        <p>june 2020 - august 2021</p>
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
