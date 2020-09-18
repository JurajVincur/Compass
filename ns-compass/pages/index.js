import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'



export default class Home extends React.Component {

  // WARN: must use window.eel to keep parse-able eel.expose{...}


  // Test anonymous function when minimized. See https://github.com/samuelhwilliams/Eel/issues/363
  show_log (msg) {
    console.log(msg)
  }
  // Expose the `sayHelloJS` function to Python as `say_hello_js`
  sayHelloJS (x) {
    console.log('Hello from ' + x)
  }
  componentDidMount () {
    window.eel.set_host('ws://localhost:8080')
    window.eel.expose(this.sayHelloJS, 'say_hello_js')
    window.eel.expose(this.show_log, 'show_log')

    // Test calling sayHelloJS, then call the corresponding Python function
    this.sayHelloJS('Javascript World!')
    window.eel.say_hello_py('Javascript World!')
  }




  render () {

    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
        <script type="text/javascript" src="http://localhost:8080/eel.js"></script>
      </div>
    )
  }
}