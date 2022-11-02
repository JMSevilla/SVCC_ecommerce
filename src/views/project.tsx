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
      <ResponsiveAppBar title={"Ecommerce"} />
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
                        <Typography variant="h6">Services 1</Typography>
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
                        <Typography variant="h6">Services 2</Typography>
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
                        <Typography variant="h6">Services 3</Typography>
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
                        <Typography variant="h6">Services 4</Typography>
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
              src="https://www.lsretail.com/hubfs/BLOG_-ecommerce-and-the-cloud.jpg"
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
              The best ECommerce platform ever exist !
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
              src="https://kinsta.com/wp-content/uploads/2022/06/open-source-ecommerce.jpg"
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
