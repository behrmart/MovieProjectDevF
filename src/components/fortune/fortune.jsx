import { useEffect, useState } from 'react'


const url = "http://192.168.0.2:3333/fortunejson"; // JSON resource URL



const Fortune = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] =useState();

    useEffect (() => {
    if (loading) {
        fetch (url)
        .then ((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
          })
        .then ((data) => {
            setData(data);
            // Process and display the parsed JSON data
            console.log("JSON data fortunetext[1] :" + data.fortunetext[1]);
            //fortunetextElement.innerHTML = fortunetext[1].replace(/\n/g, "<br>"); //Replace \n with br
            setLoading(false);
          })
          .catch(error => {
            console.error("Fetch error:", error);
            fortunetext = `${url} Fortune JSON server Fetch error`;
          });
        }
    }, []);

    if (loading){
        return (
            <>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p>{data.fortunetext[1]}</p>
                <p>{data.fortunetype}</p>
            </>
        )
    }

}

export default Fortune