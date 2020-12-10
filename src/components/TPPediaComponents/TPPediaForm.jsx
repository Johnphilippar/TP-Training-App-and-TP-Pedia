import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
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
                        <span>Article Name</span>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="input-form">
                        <span>Image</span>
                        <input className="form-control" type="file" />
                    </div>
                    <div className="input-form" style={{marginBottom:'0'}}>
                        <span>Article Data</span>
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
                <hr/>
                <div className="forms-action">
                    <button className="btn btn-primary" style={{marginRight:"12px"}}>Submit</button>
                    <button className="btn btn-danger" onClick={props.close} type="button">
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}