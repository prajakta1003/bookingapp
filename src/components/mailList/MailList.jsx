import "./mailList.css"

export default function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save Money</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribed</button>
        </div>
        
    </div>
  )
}
