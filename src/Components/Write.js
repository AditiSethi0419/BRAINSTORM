import React from 'react'
import Navbar from './Navbar'
import { useState, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Write = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <div>
            <Navbar />
            <div className='container my-4 border'>
                <h1 className=''>Write Post</h1>
                <div className='text-start my-2'>
                    <h3>Post Title</h3>
                    <input type='text' className='form-control my-2' />

                    <h3>Post content</h3>
                    {/* <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                 */}

                   <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                    <h3>Post Category</h3>
                    <input type='text' className='form-control my-2' />
                </div>
                <button type="button" class="btn btn-primary my-2 mx-2">Submit Post</button>
                <button type="button" class="btn btn-danger my-2">Reset Post</button>
            </div>
        </div>
    )
}

export default Write