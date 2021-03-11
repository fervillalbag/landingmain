
import Submit from '../atoms/Submit'
import Input from '../atoms/Input'

export default function Form() {
  return (
    <div>
      <Input placeholder="Updates in your box.." />
      <Submit>Go</Submit>

      <style jsx>{`
        div {
          display: flex;
          column-gap: 1.5rem;
        }  
      `}</style>
    </div>
  )
}
