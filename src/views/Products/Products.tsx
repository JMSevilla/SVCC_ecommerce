import React from "react";
import {
  SystemContainer,
  ResponsiveAppBar,
  SystemCard,
  SystemGrid,
} from "../../components";
import { Typography, CardContent, Grid } from "@mui/material";
const Products = (): JSX.Element => {
  return (
    <>
      <ResponsiveAppBar />
      <SystemContainer
        fixed={false}
        maxWidth={"lg"}
        stylish={{ marginTop: "100px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SystemCard
              children={
                <CardContent>
                  <Typography variant="h6">Categories</Typography>
                </CardContent>
              }
            />
          </Grid>
          <Grid item xs={8}>
            <SystemCard
              children={
                <CardContent>
                  <Typography variant="h5">Products List</Typography>
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
                                  <Typography variant="h6">
                                    Services 1
                                  </Typography>
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
                                    Services 2
                                  </Typography>
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
                                    Services 3
                                  </Typography>
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
                                    Services 4
                                  </Typography>
                                </CardContent>
                              }
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                  {/* second section static example */}
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
                                  <Typography variant="h6">
                                    Services 1
                                  </Typography>
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
                                    Services 2
                                  </Typography>
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
                                    Services 3
                                  </Typography>
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
                                    Services 4
                                  </Typography>
                                </CardContent>
                              }
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                  {/* Third section static example */}
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
                                  <Typography variant="h6">
                                    Services 1
                                  </Typography>
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
                                    Services 2
                                  </Typography>
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
                                    Services 3
                                  </Typography>
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
                                    Services 4
                                  </Typography>
                                </CardContent>
                              }
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                </CardContent>
              }
            />
          </Grid>
        </Grid>
      </SystemContainer>
    </>
  );
};

export default Products;
