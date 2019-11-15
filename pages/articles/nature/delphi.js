import DocumentsLayout from '../../../components/DocumentsLayout'

const Delphi = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const d = host + "nature/d.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>น้ำพุที่เดลฟี</h3>


            <img className="img-doc" src={d} alt="d" />

            <p className="ml-3">อพอลโลยังได้เคยไปหลงรักพรายน้ำนามว่า คาสทาเลีย (Castalia) คาสทาเลียไม่มีใจให้อพอลโลเธอจึงวิ่งหนีจนสุดท้ายเธอได้กระโจนหนีลงไปยังบ่อน้ำพุที่เดลฟี
 น้ำพุนี้จึงถูกตั้งชื่อว่าคาสทาเลียตามเธอตั้งแต่นั้นมา เชื่อว่าน้ำพุบ่อนี้มีความศักดิ์สิทธิ์ น้ำจากน้ำพุจะถูกนำมาชำระล้างวิหารแห่งอพอลโลและมีสรรพคุณในการให้แรงบันดาลใจแก่นักกวี</p>







        </DocumentsLayout>
    )
}

export default Delphi
