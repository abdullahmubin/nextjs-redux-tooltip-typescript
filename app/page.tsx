"use client"

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, increment } from '@/userSlice';
import { AppDispatch, RootState } from '@/store/store';

import Image from 'next/image'

export default function Home() {
  const userRef = useRef(false);
  const { entities, loading, incrementVal } = useSelector((state: RootState) => {
    console.log('check entities');
    console.log(state);

    return state
  })
  const dispatch = useDispatch<AppDispatch>();


  console.log('--------')
  console.log(entities)
  console.log(loading)

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());

    }

    return () => {
      userRef.current = true;
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {
        loading ? <h1>Loading...</h1> :
          entities?.map((user: any) => (
            <h3 key={user.id}>{user.name}</h3>
          ))
      }


      <button onClick={() => dispatch(increment())}>click on me</button>
      {incrementVal}
    </main>
  )
}
