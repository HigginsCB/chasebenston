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

//build sidebar component to navigate between pages
//build work history page and make optional until filled
function Routes() {

    return (
        <div>
            <Router>
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="text"
                        >
                            <Button component={Link} to={'/chasebenston/'}>Home</Button>
                            <Button component={Link} to={'/chasebenston/awards'}>Awards</Button>
                            <Button component={Link} to={'/chasebenston/projects'}>Projects</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item>
                        <Switch>
                            <Route exact={true} path={RoutePaths.home} component={Home} />
                            <Route exact={true} path={RoutePaths.awards} component={Awards} />
                            <Route exact={true} path={RoutePaths.projects} component={Projects} />
                            <Route exact={true} path={RoutePaths.workexp} component={WorkExp} />
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        </div>
    );
}

export default Routes;