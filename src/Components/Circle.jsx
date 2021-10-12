function Circle({circleColor, circleNumber}) {
    return(

        <div className="circle">
            <span style={{
                background: circleColor,
                width: '200px',
                height: '200px',
                borderRadius: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>This is circle nr.: {circleNumber}</span> 
        </div>
    )
}

export  default Circle;