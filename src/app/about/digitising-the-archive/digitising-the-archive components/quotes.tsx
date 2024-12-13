export const Quotes = ({ text }:{text:string}) => {
    return (
      <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #ccc', paddingLeft: '16px', margin: '16px 0', color: '#555' }}>
        {text}
      </blockquote>
    );
  };