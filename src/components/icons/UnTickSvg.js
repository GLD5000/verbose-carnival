export default function UnTickSvg({fill = "none"}) {
return (
  <div className='svg-wrapper'>
<svg
id='-svg'
alt=''
height='100%'
width='100%'
viewBox='0 0 16 16'
>
  <circle 
  cx="8"
  cy="8"
  r="6.5"
  style={{
    stroke: '#000000',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
       fill: fill,
     }}
    
  />

</svg>
</div>
    )
}