import { Editor } from "@/components/editor/Editor"
import Header from "@/components/Header"

const Document = () => {
    return (
        <div>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">This is a fake document title</p>
                </div>
                <p className="text-white">Test</p>
            </Header>
            <Editor />
        </div>
    )
}

export default Document