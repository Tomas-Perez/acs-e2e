context('test Group Chat API', () => {

  const baseUrl = 'localhost:1234';

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

  let userAdded;

  let groupAdded;

  const reset = () => {
    deleteGroup(groupId);
    deleteUser(groupOwnerId);
    deleteUser(newUserId);
  };


  // before(reset);

  after(reset);

  it('adds a User', () => {
    const user = {
      name: "User1",
      email: "user17@mail.com",
      password: "password",
      confirmPassword: "password"
    };

    addUser(user)
      .then((response) => {
        // response.body is automatically serialized into JSON
        groupOwnerId = response.body;
        userAdded = {
          id: groupOwnerId,
          name: user.name,
          email: user.email,
          password: user.password
        }
        getUser(groupOwnerId)
        .its('body')
        .should('deep.eq', JSON.stringify(userAdded));
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
        groupId = response.body;
        groupAdded = {
          id: groupId,
          name: "Group Name",
          owner: userAdded,
          members: [userAdded]
        };
        getGroup(groupId)
          .its('body')
          .should('deep.eq', JSON.stringify(groupAdded))
      });
  });

  it('adds a User to a Group', () => {
    const newUser = {
      name: "Gianni",
      email: "gianni@mail.com",
      password: "password123",
      confirmPassword: "password123"
    };

    addUser(newUser)
      .then((response) => {
        // response.body is automatically serialized into JSON
        newUserId = response.body;

        const newUserAdded = {
          id: newUserId,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        };

        groupAdded.members.push(newUserAdded);

        putUserInGroup(groupId, newUserId)
          .then((res) => {
            getGroup(groupId)
            .its('body')
            .should('deep.eq', JSON.stringify(groupAdded))
          })
      });
  })


});
