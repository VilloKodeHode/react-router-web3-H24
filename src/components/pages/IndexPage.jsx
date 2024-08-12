import { useEffect, useState } from "react";

export const IndexPage = () => {
  const limit = 200;
  const url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`;

  const [bossData, setBossData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const json = await response.json();
        setBossData(json.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(bossData);
  }, [bossData]);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl">this is the index page</h1>
      <div id="bossCards">
        {bossData.map((boss) => (
          <div key={boss.id} className="boss-card">
            <div className="boss-image">
              <img
                src={
                  boss.image
                    ? boss.image
                    : "https://user-images.githubusercontent.com/88409867/128100295-6da3345d-e5b3-472f-9d37-9b849c21f810.png"
                }
                alt={boss.name}
              />
            </div>
            <h2>{boss.name}</h2>
            <p><strong>Region:</strong> {boss.region}</p>
            <p><strong>Description:</strong> {boss.description}</p>
            <p><strong>location:</strong> {boss.location}</p>
            {/* <p><strong>:</strong> {boss.region}</p> */}
          </div>
        ))}
      </div>
    </main>
  );
};
