const Paragraph = ({ para }) => {
  const splittedPara = para.split(/\r?\n/)
  return (
    <>
      <div className="para">
        {splittedPara.map((p, i) => {
          return (
            <p key={i} className="f-ap-r">
              {p}
            </p>
          )
        })}
      </div>
      <style jsx>{`
        .para {
          max-width: 960px;
          margin: 300px auto;
          p {
            font-size: 32px;
            line-height: 130%;
            color: #221f20;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </>
  )
}

export default Paragraph
