import React, { useEffect, useState } from "react";
import { supabase } from './server';
import { Session } from "@supabase/supabase-js";


export const getUserProfile = async () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (session) {
      fetchUser();
    }
  }, [session]);

  const fetchUser = async () => {
    try {
      setLoading(true)
      session ? console.log(session) : console.log('no session')
    } catch (error) {
      console.log(error)
    }
  }
}
