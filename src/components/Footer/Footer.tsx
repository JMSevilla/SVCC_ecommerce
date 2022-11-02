import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-12">
              <ul className="pull-right list-unstyled">
                <li>{/* <a href="">{Resources.Footer.ContactUs}</a> */}</li>
                <li>© Ecommerce {new Date().getFullYear()}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
