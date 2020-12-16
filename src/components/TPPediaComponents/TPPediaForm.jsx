import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import Modal from 'react-modal';
export default function TPPediaForm(props) {

    const [articleText, setArticleText] = useState('')

    return (
        <>
            <div className="tppedia-form">
                <div className="form-title">
                    <span>WFM Knowledge Base Form</span>
                </div>
                <div className="article-form">
                    <div className="input-form">
                        <div className="form">
                            <label>Article Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form">
                            <label>Image</label>
                            <input className="form-control" type="file" />
                        </div>
                    </div>
                    <div className="input-form articletext" style={{ marginBottom: '0' , display: 'block' }}>
                        <label>Article Data</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={articleText}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setArticleText(data)
                            }}
                        />
                    </div>
                    {/* <div>
                        <h2>Content</h2>
                        <p>{parse(articleText)}</p>
                    </div> */}
                </div>
                <div className="forms-action">
                    <button className="cancel-btn" style={{ marginRight: "12px" }} onClick={props.close} type="button">
                        Close
                    </button>
                    <button className="submit-btn">Submit</button>
                    
                </div>
            </div>
        </>
    )
}