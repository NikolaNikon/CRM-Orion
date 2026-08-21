type DailyBookingBoardProps = {
  dateLabel?: string;
  halls?: Array<{
    id: string;
    name: string;
    priceFrom?: string;
  }>;
};

const DEFAULT_HOURS = Array.from({ length: 14 }, (_, index) => `${10 + index}:00`);

export const DailyBookingBoard = ({
  dateLabel = 'Выберите дату',
  halls = [],
}: DailyBookingBoardProps) => (
  <section
    style={{
      display: 'grid',
      gap: '16px',
      padding: '20px',
      border: '1px solid #d8dee9',
      borderRadius: '12px',
      background: '#ffffff',
      color: '#1f2937',
      fontFamily: 'system-ui, sans-serif',
    }}
  >
    <header style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>
          Шахматка бронирований
        </div>
        <h2 style={{ margin: '4px 0 0', fontSize: '20px' }}>{dateLabel}</h2>
      </div>
      <div style={{ fontSize: '13px', color: '#6b7280', textAlign: 'right' }}>
        Подтверждённые заявки и блокировки будут показаны на временной шкале.
      </div>
    </header>

    <div style={{ overflowX: 'auto' }}>
      <div
        style={{
          minWidth: '920px',
          display: 'grid',
          gridTemplateColumns: '180px repeat(14, minmax(52px, 1fr))',
          borderTop: '1px solid #e5e7eb',
          borderLeft: '1px solid #e5e7eb',
        }}
      >
        <div style={headerCellStyle}>Зал</div>
        {DEFAULT_HOURS.map((hour) => (
          <div key={hour} style={headerCellStyle}>
            {hour}
          </div>
        ))}

        {halls.length === 0 ? (
          <>
            <div style={hallCellStyle}>Добавьте залы</div>
            <div
              style={{
                ...timelineCellStyle,
                gridColumn: 'span 14',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
              }}
            >
              После создания залов здесь появится дневная доступность.
            </div>
          </>
        ) : (
          halls.flatMap((hall) => [
            <div key={`${hall.id}-name`} style={hallCellStyle}>
              <strong>{hall.name}</strong>
              {hall.priceFrom ? (
                <span style={{ display: 'block', marginTop: '4px', color: '#6b7280', fontSize: '12px' }}>
                  от {hall.priceFrom}
                </span>
              ) : null}
            </div>,
            ...DEFAULT_HOURS.map((hour) => (
              <div key={`${hall.id}-${hour}`} style={timelineCellStyle} />
            )),
          ])
        )}
      </div>
    </div>
  </section>
);

const headerCellStyle = {
  minHeight: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  borderRight: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  background: '#f8fafc',
  color: '#475569',
  fontSize: '12px',
  fontWeight: 600,
};

const hallCellStyle = {
  minHeight: '68px',
  padding: '10px',
  borderRight: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  background: '#f8fafc',
  fontSize: '14px',
};

const timelineCellStyle = {
  minHeight: '68px',
  borderRight: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  backgroundImage:
    'linear-gradient(90deg, rgba(226,232,240,0.55) 1px, transparent 1px)',
  backgroundSize: '50% 100%',
};
