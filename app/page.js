"use client"
import React, { useState } from 'react'
import Header from './components/Header'
import CreateArea from './components/CreateArea'
import Notes from './components/Notes'
import Footer from './components/Footer'

const page = () => {

  const [inputs, setinputs] = useState([])

  function addnote(note) {
    setinputs(preinputs => [...preinputs, note])
  }

  function handleDelete(id) {
    setinputs(preinputs => preinputs.filter((_, index) => {
      return id !== index
    })
    )
  }

  return (
    <>
      <Header />
      <CreateArea addnote={addnote} />
      {inputs.map((noteitem, index) => {
        return (
          <Notes key={index} id={index} title={noteitem.title} content={noteitem.content} handleDelete={handleDelete} />
        )
      })}
      <Footer />
    </>
  )
}

export default page