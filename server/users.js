import React, { useEffect, useState } from "react";
import { supabase } from './server';



export const getUserProfile = async () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true)
      
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
    
    setLoading(false)
  }
  return user;
}

