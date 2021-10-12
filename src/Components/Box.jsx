function Box({boxColor, ls, boxNumber}) {
    return(

        <div className="black-box">
            <span style={{
                letterSpacing: ls,
                color: boxColor
                }}>This is black box nr.: {boxNumber}</span> 
        </div>
    )
}

export  default Box;