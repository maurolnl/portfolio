import {useState, useEffect} from 'react'
import { sendEmail } from '../services/SendEmail';

export default function useSendEmail(target) {
  const NOT_SENDED = 1
  const SENDED_SUCCESSFULLY = 2
  const ERROR_SENDING = 3

  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(NOT_SENDED);

  useEffect(() => {
    if(target != null) {
      setLoading(true);
      sendEmail(target).then(result => {
        setLoading(false);
        setSended(SENDED_SUCCESSFULLY)
      }).catch(err => {
        setSended(ERROR_SENDING)
        console.log(err);
      })
    }
  }, [target])

  return {loading, sended}
}
