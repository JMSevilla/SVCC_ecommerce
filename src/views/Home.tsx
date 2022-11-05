import React from "react";
import {
  SystemContainer,
  ResponsiveAppBar,
  SystemCarousel,
  SystemGrid,
  SystemCard,
  SystemButton,
  Footer,
} from "../components";
import { Typography, CardContent } from "@mui/material";
const Home = (): JSX.Element => {
  return (
    <>
      <ResponsiveAppBar title={"Happy Paws"} />
      <SystemContainer
        stylish={{
          marginTop: "100px",
          marginBottom: "30px",
        }}
      >
        <SystemCarousel />
        <SystemGrid
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          lg={3}
          style={{
            marginTop: "50px",
            alignItems: "center",
            display: "flex",
          }}
          GridItems={[
            {
              childrenId: 1,
              children: (
                <>
                  <SystemCard
                    children={
                      <CardContent>
                        <Typography variant="h6">Customer Services</Typography>
                        <img
                          src="https://www.pngitem.com/pimgs/m/73-732620_transparent-call-center-agent-clipart-call-center-agent.pnghttps://cdn3.iconfinder.com/data/icons/city-amenities-flat/58/002_-_Social_Care-256.png"
                          style={{
                            width: "30%",
                            height: "auto",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          alt="Customer Services"
                        />
                      </CardContent>
                    }
                  />
                </>
              ),
            },
            {
              childrenId: 2,
              children: (
                <>
                  <SystemCard
                    children={
                      <CardContent>
                        <Typography variant="h6">
                          Avoiding Listing Violation
                        </Typography>
                        <img
                          src="https://media.istockphoto.com/vectors/magnifier-assessment-checklist-icon-vector-flat-style-symbol-vector-id1022119020?k=20&m=1022119020&s=612x612&w=0&h=_G0dy2pp60wc7l_Vbh6NMXwCsRGoyF-funsLGbx6KaY="
                          style={{
                            width: "30%",
                            height: "auto",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          alt="Avoiding Listing Violation"
                        />
                      </CardContent>
                    }
                  />
                </>
              ),
            },
            {
              childrenId: 3,
              children: (
                <>
                  <SystemCard
                    children={
                      <CardContent>
                        <Typography variant="h6">
                          Fulfillment of Orders
                        </Typography>
                        <img
                          src="https://i.pinimg.com/originals/ae/07/1b/ae071b8fadd7cd3353ffb13b139959c9.jpg"
                          style={{
                            width: "30%",
                            height: "auto",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          alt="Fulfillment of Orders"
                        />
                      </CardContent>
                    }
                  />
                </>
              ),
            },
            {
              childrenId: 4,
              children: (
                <>
                  <SystemCard
                    children={
                      <CardContent>
                        <Typography variant="h6">
                          Customer Satisfaction
                        </Typography>
                        <img
                          src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-high-star-rating-icon-png-image_5194071.jpg"
                          style={{
                            width: "30%",
                            height: "auto",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          alt="Customer Satisfaction"
                        />
                      </CardContent>
                    }
                  />
                </>
              ),
            },
          ]}
        />
        <div
          className="row"
          style={{
            marginTop: "50px",
          }}
        >
          <div className="col-sm">
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/01/07124405/h2httb_web.jpg"
              alt="product image"
              style={{
                marginTop: "20px",
                width: "100%",
                height: "auto",
              }}
              className="img-fluid"
            />
          </div>
          <div style={{ marginTop: "20px" }} className="col-sm">
            <Typography variant="h4" gutterBottom>
              Welcome to Happy Paws!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thank you for visiting our website, we appreciate that you are
              curious about our shop, please let us tell you a little bit about
              Happy Paws. Happy Paws is a locally owned and operated pet food
              and supply store. Our mission is to provide dogs parents with
              everything that they need to ensure their pet lives a long and
              happy life. We love to talk about pets of all types and we are
              even more excited when you bring your furry family member into the
              store to meet us!
            </Typography>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "50px",
          }}
        >
          <div style={{ marginTop: "20px" }} className="col-sm">
            <Typography variant="h4" gutterBottom>
              Shop Now !
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our goal is to provide a clean, pet friendly store that has
              everything that your dog or cat needs. While our store is not very
              large, we offer an experience that is fast, friendly, local, and
              less expensive.
            </Typography>
            <SystemButton
              buttonName={"SHOP NOW"}
              handleClick={() => console.log("Go on shop")}
              variant={"contained"}
              style={{ marginTop: "20px" }}
            />
          </div>
          <div className="col-sm">
            <img
              src="https://beta.ems.ladbiblegroup.com/s3/content/935ae1425ff3a6093163ac7d2989bfd0.png"
              alt="product image"
              style={{
                marginTop: "20px",
                width: "100%",
                height: "auto",
              }}
              className="img-fluid"
            />
          </div>
        </div>
      </SystemContainer>
      <Footer />
    </>
  );
};

export default Home;
