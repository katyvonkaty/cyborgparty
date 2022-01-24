import { Route, Routes, Redirect, Link, HashRouter } from "react-router-dom";

import React from "react";
import Log4J from "./Log4J"
import Blog from "./Blog"



import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

const Options = () => {
      return (
        <HashRouter>
        <Item.Group divided style={{ marginTop: "80px" }}>
            <Item>

                        <Routes>
                          <Route path="/log4j" element={<Log4J />} />
                          <Route path="/blog" element={<Blog />} />
                        </Routes>
              <Item.Image
                src="https://cdn.dribbble.com/users/2064103/screenshots/17133458/media/4ee80379f310c49b4d5759cc8bbbd5c8.jpg?compress=1&resize=1200x900&vertical=top"
                rounded
              />


              <Item.Content>
                <Item.Header as="a">Walk Throughs</Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    Visually and verbally solving CTF challenges
                  </span>
                </Item.Meta>
                <Item.Extra>
                  <Label>IMAX</Label>
                  <Label icon="globe" content="Additional Languages" />
                </Item.Extra>
                <Button component={Log4J} href="/Log4J" to="/Log4J" red primary floated="right">
                  <Icon name="right chevron" />
                  Click me
                </Button>

              </Item.Content>
            </Item>

          </Item.Group>
          </HashRouter>
      )
}

export default Options;
