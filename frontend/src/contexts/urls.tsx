import axios from "axios";
import { createContext, ReactNode, useState } from "react";


interface Url {
  url: string;
  shortenedURL: string;
}

interface UrlContextData {
  urls: Url[] | [];
  handleCreateURL: (url: string) => Promise<void>;
}

const UrlContext = createContext({} as UrlContextData);

interface UrlProviderProps {
  children: ReactNode;
}

function UrlProvider(props: UrlProviderProps) {
  const [urls, setUrls] = useState<Url[]>([]);

  async function handleCreateURL(url: string) {
    const host = "http://localhost:4000/shorten-url"
  
    if (!url.trim()) {
      return;
    }
  
    else if(url.length <= 10) {
      return alert("Não é possível criar uma nova URL pois esta URL ja está muito curta.");
    }
  
    else if(!url.includes("https://")) {
      return alert("URL com formato inválido.");
    }
  
    const result = await axios.post(host, {
      url: url
    });
  
    setUrls([ ...urls, result.data]);
  }

  return (
    <UrlContext.Provider value={{ urls, handleCreateURL }}>
      {props.children}
    </UrlContext.Provider>
  )
}


export { UrlContext, UrlProvider };
