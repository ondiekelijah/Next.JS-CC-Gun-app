import Head from 'next/head'
import React, { useState } from 'react'
import { useEffect } from 'react'
import DefaultLayout from '../../layouts/Default'
import Card from '../../components/Card/Card'

export default function index() {
  const [guns, setGuns] = useState([])

  const fetchGuns = async () => {
    const response = await fetch('/api/guns')
    const data = await response.json()
    console.log(data)
    setGuns(data)
  }

  useEffect(() => {
    fetchGuns()
  }
    , [])

  return (
    <>
      <Head>
        <title>Guns | All</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div className='container mt-5'>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {guns.map(gun => (
              <Card
                id={gun.id}
                name={gun.name}
                email={gun.email}
                phone={gun.phone}
                image={gun.image.url}

              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}