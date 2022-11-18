import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';
import React from 'react'
import {Field, Formik, Form} from "formik";

const MyPosts = React.memo((props) => {
    let postElements = props.profilePage.postData.map(el => <Post text={el.text} key={el.id} likes={el.likes} name={el.name}/>);

    return(
            <div className={MyPostsCSS.post_wrapper}>

                <h1>Your Wall</h1>

                <div>
                    <h4>New Post</h4>

                    <Formik initialValues={{post:""}} onSubmit={(values,{resetForm}) =>{
                        props.addPost(values.post);
                        resetForm({})
                    }}>
                        <Form>
                            <Field type={"text"} name={"post"} placeholder={"Your post"}></Field>
                            <button type={'submit'}>Post</button>
                        </Form>
                    </Formik>
                </div>

                <div>
                    <h2>All Posts</h2>

                    {postElements}

                </div>
            </div>
    );
})

export default MyPosts;