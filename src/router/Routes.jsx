import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import RoutePaths from './RoutePaths';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Awards from '../pages/Awards';
import WorkExp from '../pages/WorkExp';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import "../App.css";
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

//build sidebar component to navigate between pages
//build work history page and make optional until filled

function Routes() {
    return (
        <div>
            <Router>
                <Grid container direction="column" alignItems="center" spacing={1}>
                    <Grid container direction="row" alignItems="center" justify="center" spacing={5}>
                            <Grid item alignContent="center">
                                <Typography variant="h5">Chase Benston</Typography>
                            </Grid>
                            <Grid item alignContent="center">
                                <ButtonGroup variant="text" >
                                <Button component={Link} to={RoutePaths.home}>Home</Button>
                                <Button component={Link} to={RoutePaths.awards}>Awards</Button>
                                <Button component={Link} to={RoutePaths.projects}>Projects</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    <Grid item alignContent="center" xs="8">
                        <Switch>
                            <Route exact={true} path={RoutePaths.home} component={Home} />
                            <Route exact={true} path={RoutePaths.awards} component={Awards} />
                            <Route exact={true} path={RoutePaths.projects} component={Projects} />
                            <Route exact={true} path={RoutePaths.workexp} component={WorkExp} />
                        </Switch>
                    </Grid>
                    <Grid item>
                        <BottomNavigation style={{ marginTop: "20px" }}>
                            <BottomNavigationAction label="GitHub"
                                target="_blank"
                                href='http://github.com/higginscb'
                                icon="GitHub"
                            />
                            <BottomNavigationAction label="GitHub"
                                target="_blank"
                                href='http://linkedin.com/in/chasebenston'
                                icon="LinkedIn"
                            />
                        </BottomNavigation>
                    </Grid>
                </Grid>
            </Router>
        </div>
    );
}

export default Routes;