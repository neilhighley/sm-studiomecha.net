const Apps = () => (
    <Switch>
      <Route exact path='/apps' component={AllApps}/>
      <Route path='/apps/:name' component={AppViewer}/>
    </Switch>
  )