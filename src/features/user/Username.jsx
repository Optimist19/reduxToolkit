// import React from 'react'
import { useSelector } from "react-redux"

export default function Username() {
	
	const username = useSelector(state => state.user.username)
	console.log(username)
	console.log("username")

	if(!username) return null

  return (
	<div>{username}</div>
  )
}
