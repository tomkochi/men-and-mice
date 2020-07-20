const Form = () => {
  return (
    <>
      <section className="form">
        <div className="container">
          <h4 className="f-ap-b">Sign up for a 30 day trial.</h4>
        </div>
        {/* /.container */}
      </section>
      <style jsx>{`
        section.form {
          margin: 140px 0;
          h4 {
            font-size: 36px;
            color: #221f20;
            max-width: 245px;
          }
        }
      `}</style>
    </>
  )
}

export default Form
