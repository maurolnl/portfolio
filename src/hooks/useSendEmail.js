import {useState, useEffect} from 'react'
import { sendEmail } from '../services/SendEmail';

export default function useSendEmail(target) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("")

  useEffect(() => {
    if(target != null) {
      setLoading(true);
      sendEmail(target).then(result => {
        setResponse(result.text);
        setLoading(false);
      })
    }
  }, [target])

  return {loading, response}
}
