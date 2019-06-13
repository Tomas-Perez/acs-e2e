context('test Group Chat API', () => {

  const addUser = user =>
    cy.request('POST', '/users', user);

  const getUser = userId =>
    cy.request(`/users/${userId}`);

  const addGroup = group =>
    cy.request('POST', '/groups', group);

  const getGroup = groupId =>
    cy.request(`/groups/${groupId}`);

  const putUserInGroup = (groupId, userID) =>
    cy.request('PUT', `/groups/${groupId}/add/${userID}`);

  let groupOwnerId;

  let groupId;

  it('adds a User', () => {
    const user = {
      name: "Name",
      email: "mail@mail.com",
      password: "password",
      confirmPassword: "password"
    };

    addUser(user)
      .then((response) => {
        // response.body is automatically serialized into JSON
        groupOwnerId = response.body.id;
        getUser(groupOwnerId)
          .its('body')
          .then( (res) => {
            res.name.should('deep.eq', user.name);
            res.email.should('deep.eq', user.name);
            res.password.should('deep.eq', user.name);
          })
      });
  });

  it('adds a Group', () => {
    const group = {
      name: "Group Name",
      owner: groupOwnerId
    };

    addGroup(group)
      .then((response) => {
        // response.body is automatically serialized into JSON
        groupId = response.body.id;
        getGroup(groupId)
          .its('body')
          .then( (res) => {
            res.name.should('deep.eq', group.name);
            res.owner.id.should('deep.eq', group.owner);
          })
      });
  });

  it('adds a User to a Group', () => {
    const newUser = {
      name: "Gianni",
      email: "gianni@mail.com",
      password: "password123",
      confirmPassword: "password123"
    };

    let newUserId;

    addUser(newUser)
      .then((response) => {
        // response.body is automatically serialized into JSON
        newUserId = response.body.id;

        putUserInGroup(groupId, newUserId)
          .then((res) => {
            getGroup(res.body.id)
              .then((updatedGroup) => {
                updatedGroup.members.eq(1).its('id').should('deep.eq', newUserId)
              })
          })
      });
  })


});
