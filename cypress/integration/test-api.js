context('test Group Chat API', () => {

  const baseUrl = '172.22.48.148:1234';

  const addUser = user =>
    cy.request('POST', baseUrl + '/users', user);

  const getUser = userId =>
    cy.request(baseUrl + `/users/${userId}`);

  const addGroup = group =>
    cy.request('POST', baseUrl + '/groups', group);

  const getGroup = groupId =>
    cy.request(baseUrl + `/groups/${groupId}`);

  const putUserInGroup = (groupId, userID) =>
    cy.request('PUT', baseUrl + `/groups/${groupId}/add/${userID}`);

  const deleteGroup = groupId =>
    cy.request('DELETE', baseUrl + `/groups/${groupId}`);

  const deleteUser = userId =>
    cy.request('DELETE', baseUrl + `/users/${userId}`);


  let groupOwnerId;

  let groupId;

  let newUserId;

  const reset = () => {
    deleteGroup(groupId);
    deleteUser(groupOwnerId);
    deleteUser(newUserId);
  };


  // before(reset);

  after(reset);

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

  /*it('adds a User to a Group', () => {
    const newUser = {
      name: "Gianni",
      email: "gianni@mail.com",
      password: "password123",
      confirmPassword: "password123"
    };

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
  })*/


});
