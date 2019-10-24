import React from 'react'
import './address-section.css'
import '@fortawesome/fontawesome-free/js/all'

const Addresssection = props => {
  const {phone, email} = props
  const hotline = 'Hotline'
  const callUs = 'Ruf uns an: '
  const openingTimes = 'Mo. - Fr. von 9:00 - 17:00 Uhr'
  const livechat = 'Live Chat'
  const useWindow = 'Benutze das Charfenster unten rechts'
  const message = 'Nachricht'
  const replyAsap = 'Wir werden so schnell wie möglich auf deine Nachricht antworten'
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='hotline addresselement'>
          <h3 className='addresstitle'><i className='fas fa-mobile' /> {hotline}</h3>
          <p>
            {callUs}<span>{phone}</span>
          </p>
          <p>{openingTimes}</p>
        </div>
        <div className='livechat addresselement'>
          <h3 className='addresstitle'><i className='far fa-comment-alt' /> {livechat}</h3>
          <p>{useWindow}</p>
          <p>{openingTimes}</p>
        </div>
        <div className='nachricht addresselement'>
          <h3 className='addresstitle'><i className='far fa-envelope' /> {message}</h3>
          <p>{email}</p>
          <p>{replyAsap}</p>
        </div>
      </div>
    </div>
  )
}

export default Addresssection
