import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import MatDialog from './MatDialog';

export default class MatToolbar extends React.Component {

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="User Management System" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarSeparator />
                    <MatDialog />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}