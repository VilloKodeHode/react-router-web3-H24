import { useEffect, useState } from "react";

export const AboutPage = ()=> {

  const url = "https://api.adviceslip.com/advice"

  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const json = await response.json();
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(advice);
  }, [advice]);
    return (
        <main className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl">this is the about page</h1>
        <h2>{advice}</h2>
      </main>
    )
}