export default {
  create({Meteor, LocalState, FlowRouter}, type,amount,zone,address,img,title, content) {
    // if (!title || !content) {
    //   return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    // }

    LocalState.set('SAVING_ERROR', null);

    // const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', type,amount,zone,address,img,title,content, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    // FlowRouter.go(`/post/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};